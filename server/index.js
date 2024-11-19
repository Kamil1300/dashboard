const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const userRouter = require("./routes/user.route")

dotenv.config()

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB Connected")).catch((err)=> console.log(`Error connecting DB ${err}`))

const PORT = process.env.PORT || 5000
l

app.use("/api/user",userRouter)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})