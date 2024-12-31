// data base connect cheyyanulla code

import mongoose from "mongoose";

const connectDb = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://connectasifpk:asif1234@cluster0.4axp7.mongodb.net/"
  );

  console.log(`MongoDb connected : ${conn.connection.host}`);
};

export default connectDb;
