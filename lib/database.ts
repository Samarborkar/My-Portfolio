import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connectToDatabase = async () => {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not configured");
  }

  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    return;
  }

  if (connectionState === 2) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "portfolio",
      bufferCommands: true,
    });
  } catch {
    throw new Error("Connection to database failed");
  }
};

export default connectToDatabase;
 