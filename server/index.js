const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const session = require('express-session');
const SECRET = process.env.SECRET || 'SECRET'
const cloudinary = require('cloudinary').v2;
const router = require('./router');

const corsConfig = {
  origin: 'http://localhost:5173',
  credentials: true,
};

// cloudinary.config({
//   cloud_name: 'dyif3hely',
//   api_key: '',
//   api_secret: '',
// });

app.use(cors(corsConfig));
app.use(express.json());

app.use(
  session({
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    secret: SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60,
      sameSite: true,
      httpOnly: true,
      secure: false,
    },
  })
);

app.use(router);


app.listen(port, () => {
  console.log(`App listening on port ${port} 🐬`);
})