const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

// dotenv.config(); // .envをprocess.envに割当て
const port = process.env.PORT
const cors = require('cors')

connectDB()

const app = express()
// Bodyの中身を確認するための処理
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//ユーザの登録
app.use('/api/users', require('./routes/userRoutes'))

//アップロード
app.use('/api/posts', require('./routes/postRoutes'));
app.use("/uploads", express.static("/uploads"));

//エラーハンドリング
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))