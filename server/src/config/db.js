require("dotenv").config()
const mongoDbUrl = process.env.MONGO_DB_URL
const mongoose = require('mongoose')
module.exports = () => {
  return mongoose.connect(mongoDbUrl)
}