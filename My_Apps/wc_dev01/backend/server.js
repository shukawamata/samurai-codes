// import express from "express";
// import dotenv = "dotenv"
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
// dotenv.config(); // .envをprocess.envに割当て
const port = process.env.PORT

connectDB()

const app = express()
// Bodyの中身を確認するための処理
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))