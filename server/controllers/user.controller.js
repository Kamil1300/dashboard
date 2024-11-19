const User = require('../models/User')
const cron = require('node-cron')
const nodemailer = require('nodemailer')
const { randomTempId, randomId, randomPass } = require('../utils/randomIdPass.js')

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
})

export const createUser = async (req, res) => {
    try {
        const { name, email, phone, address, plan, callerId, role } = req.body
        const tempID = randomTempId(name)
        const tempIDExpiration = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)

        const newUser = new User({
            name, email, phone, address, plan, callerId, tempID, tempIDExpiration, status: 'pending'
        })

        await newUser.save()

        cron.schedule('0 0 * * *', async () => {
            try {
                const result = await User.updateMany(
                    { tempIDExpiration: { $lt: new Date() } },
                    { $set: { tempID: null, tempIDExpiration: null } }
                )
                console.log(`Cleared expired tempIDs for ${result.modifiedCount} users.`);
            } catch (error) {
                console.error("Error clearing expired tempIDs: ", error);
            }
        })
        const link = "https://localhost:3000/dashboard/verification"

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Complete Your Registration",
            text: `Please complete your registration using this temp ID: ${tempID} here ${link}`
        })
        res.status(201).json({ message: "User registered with temporary ID" })
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error })
    }
}

export const verifyUser = async (req, res) => {
    try {
        const { tempID, signaturePhoto, photo } = req.body
        const verify = await User.findOne({ tempID })

        if (!verify) return

        const newDetails = await verify.findOneAndUpdate(
            { tempID },
            {
                $set: {
                    signaturePhoto,
                    photo,
                    tempID: null
                }
            },
            { new: True }
        )
        res.status(200).json(newDetails)
    } catch (error) {
        res.status(500).json({ message: "Error uploading user details" })
    }
}

export const verified = async (req, res) => {
    const { id } = req.params
    const { status } = req.body

    if (!['approve', 'reject'].includes(status)) {
        return res.status(400).send({ error: "Invalid action" })
    }

    const newStatus = status === 'approve' ? 'active' : 'reject'

    try {
        const user = await User.findById(id)
        if(!user){
            return res.status(404).send({error:"User not found"})
        }
        const {name} = user
        const userId = randomId(name)
        const password = randomPass(name)
        const update = await User.findByIdAndUpdate(
            id,
            { $set: { status: newStatus, userId, password } },
            { new: true }
        )

        if (!update) {
            return res.status(404).send({ error: "User Update failed" })
        }

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: "Congratulations!",
            text: `Here is your login credentials ${userId} and ${password}`
        })

        return res.status(200).send({ message: 'User status updated', user })
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Failed to update user status" })

    }
}