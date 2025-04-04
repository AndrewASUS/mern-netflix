import mongoose from "mongoose"
import { ENV_VARS } from "./envVars.js"


export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV_VARS.MONGO_URI)
    console.log("MongoDBconnected: " + conn.connection.host )
  } catch (error) {
    console.log(("Error connecting to MONGODB: " + error.message))
    process.exit(1) // 1 MEANS ERROR, 2 MEANS SUCESS
  }
}
