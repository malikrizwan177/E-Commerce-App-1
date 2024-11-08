import mongoose from "mongoose";

const port = process.env.PORT || 4000

const connectDB = async (app) => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      //port
      app.listen(port, () => {
        console.log("Db connected and On port", port);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export default connectDB;
