const mongoose = require('mongoose');
const DB_PORT = 27017;
const DB_NAME = 'BlossomBud';

main().catch(err => console.log(err));

async function main () {
  await mongoose.connect(`mongodb://127.0.0.1:${DB_PORT}/${DB_NAME}`);
  console.log(`Database connected @ port ${DB_PORT}! 🐙`)
}
