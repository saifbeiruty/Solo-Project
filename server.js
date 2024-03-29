const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const bcrypt = require('bcrypt');
const userData2 = require('./server/UserModel');
const stockData = require('./server/StockModel');
const cors = require('cors')
const mongoose = require('mongoose');
const PORT= 3000;
const path = require('path')
// require dotenv?

const uri = 'mongodb+srv://saifbeiruty:saifbeiruty@cluster1.qbxan.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('Connected to Mongoose Succesfully')
});

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req,res) => {
    res.send('Hi')
})

app.post("/signup", async (req, res) => {
    try {
    const { username, password } = req.body
    if(username !== "" && password !== "" ) {
        const hashedPassword = await bcrypt.hash(password, 10);
        let user = { name: username, password: hashedPassword};
        const information = await userData2.create(user); 
//        res.cookie('username', username)
        res.send('works')
    } else {
        res.send('Required Information was not provided')
    }
    } catch(e) {
        res.send(e)
    }
})

app.post('/stocks', async (req, res) => {
    try {
        const { stock, data } = req.body
        let stocks = { stockNames: stock, stockData: data}
        const dataInformation = await userData2.findOneAndUpdate({ name: 'saif' }, stocks)
        //console.log(stocks)
        res.send('Stockssss')
    } catch(e) {
        next(e)
    }
})

app.get('/ticker', async (req, res) => {
    const { cookieUser } = req.body
    const stockDatas = await userData2.find( { name: cookieUser } )
    res.json(stockDatas[0])
    console.log(stockDatas[0])
})

app.post('/login', async (req,res) => {
    const { userInfoName, userInfoPass } = req.body
    const user = await userData2.find({ name: userInfoName })
    console.log(user)
    if(user.length===0) {
        res.send('Unable to find user')      
    }
    try {
       if (await bcrypt.compare(userInfoPass, user[0].password)) {
           res.cookie('username', userInfoName)
           res.send('Success')
       } else {
           res.send('Access Denied')
       }
    } catch {
        res.status(500)
    }
})

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
});
