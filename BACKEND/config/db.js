// data base connect cheyyanulla code

import mongoose from "mongoose";

const connectDb = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL);

  console.log(`MongoDb connected : ${conn.connection.host}`);
};

export default connectDb;
