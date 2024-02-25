const mongooes = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥  Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');
const dbPass = process.env.DATABASE_PASSWORD;
console.log(process.env.DATABASE_PASSWORD);

const DB = process.env.DATABASE.replace('<PASSWORD>', dbPass);

mongooes
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful'));

const port = 3000;
const server = app.listen(port, () => {
  console.log(`App running on ${port}....`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥  Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
