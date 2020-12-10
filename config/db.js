const mongoose = require("mongoose");
console.log('1');
console.log(process.env.MONGO_URI);
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log('2');

  console.log(
    `Mongo database connected on ${conn.connection.host}`.cyan.underline.bold
  );
};
module.exports = connectDB;
