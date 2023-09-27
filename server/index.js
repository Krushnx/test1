const express = require('express')
const mongoose = require('mongoose')
// const cors = require('cors')
const RegisterModel = require('./models/Register')

const app = express()
// app.use(cors(
//     {
//         origin: ["https://deploy-mern-frontend.vercel.app"],
//         methods: ["POST", "GET"],
//         credentials: true
//     }
// ));
app.use(express.json())

mongoose.connect('mongodb+srv://contactnagare:7cnRMbOBIZdDIbYg@cluster0.xihnvek.mongodb.net/?retryWrites=true&w=majority');


app.get("/", (req, res) => {
    res.json("Samplw");
})


app.listen(8000, () => {
    console.log("Server is Running")
})
