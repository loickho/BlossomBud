const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const session = require('express-session');
const SECRET = process.env.SECRET
const router = require('./router')

app.use(cors());
app.use(express.json());
app.use(router);

app.use(
  session({
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    secret: SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60,
      sameSite: true,
      httpOnly: false,
      secure: false,
    },
  })
);


app.listen(port, () => {
  console.log(`App listening on port ${port} 🐬`);
})