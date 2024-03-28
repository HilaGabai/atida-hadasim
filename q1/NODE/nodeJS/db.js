import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connect = () => {
  console.log(process.env.DB_CONNECT)
  if(process.env.DB_CONNECT)
  mongoose
    .connect(process.env.DB_CONNECT)//('mongodb://127.0.0.1:27017/cookbookDb')
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Unable to connect to MongoDB.", error);
    });
    else
      console.log("You're not connected to MongoDB");
};

const disconnect = () => {
  mongoose
    .disconnect()
    .then(() => {
      console.log("Disconnected from MongoDB");
    })
    .catch((error) => {
      console.error("Failed to disconnect from MongoDB", error);
      throw error;
    });
};

export { connect, disconnect };