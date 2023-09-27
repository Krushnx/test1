const express = require('express')
const mongoose = require('mongoose')
const RegisterModel = require('./models/Register')

const app = express()


mongoose.connect('mongodb+srv://contactnagare:7cnRMbOBIZdDIbYg@cluster0.xihnvek.mongodb.net/?retryWrites=true&w=majority');


app.use(express.json())


app.get("/", (req, res) => {
    res.json("Fucking work ??");
})


app.listen(8000, () => {
    console.log("Server is Running")
})
