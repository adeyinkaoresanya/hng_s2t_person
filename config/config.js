import dotenv from "dotenv";
dotenv.config();

const config = {
  port: process.env.PORT,
  mongodb_url: process.env.MONGODB_URI
}

export {config};