import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-ojiprzr-shard-00-00.waa37s7.mongodb.net:27017,ac-ojiprzr-shard-00-01.waa37s7.mongodb.net:27017,ac-ojiprzr-shard-00-02.waa37s7.mongodb.net:27017/CRUD-APPLICATION?ssl=true&replicaSet=atlas-4abhan-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
