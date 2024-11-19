const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userId: {type: String, required: false, unique: true},
    name: {type : String, required: true},
    email: { type: String, unique: true, required: true },
    password: {type: String, required: false},
    phone: {type: String, required: true},
    address: {type: String, required: true},
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    plan: {type : String, enum:["b-1","b-2"], default: ' '},
    callerId: mongoose.Schema.Types.ObjectId,
    tempID: String,
    tempIDExpiration: Date,
    photo: {type: String, required: true},
    signaurePhoto: {type: String, required: true},
    status: { type: String, enum: ['pending', 'approve', 'reject'], default: 'pending' }
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)