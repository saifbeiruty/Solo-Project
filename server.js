const express = require('express');
const app = express();
// const cors = require('cors')
const mongoose = require('mongoose');
const PORT= 3000;
// require dotenv?

const uri = process.env.URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('Connected to Mongoose Succesfully')
});

app.use(express.json());


app.use((err, req, res, next) => {
    let defaultErr = {
      log: "Express error handler caught unknown middleware error",
      status: 400,
      message: { err: "An error occurred" },
    };
    let errorObj = Object.assign(defaultErr, { message: { err: err.message } });
    res.status(errorObj.status).send(errorObj);
  });

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})
