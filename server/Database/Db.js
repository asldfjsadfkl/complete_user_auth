import mongoose from "mongoose";

export const connctDB = () => {
  // const URI = `mongodb+srv://root:root@cluster0.iarf5hy.mongodb.net/user`;
  const URI = "mongodb://127.0.0.1:27017/auth";
  try {
    const connection = mongoose.connect(URI);
    console.log("database connented");
  } catch (error) {
    console.log(`database connection have error that is ${error}`);
  }
};
