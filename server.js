import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app.js";

const port = process.env.PORT || 5000;
const db_uri = process.env.DATABASE_URI;

//  mongodb conncet and start

const startSerevr = async () => {
  try {
    await mongoose.connect(db_uri);
    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

startSerevr();