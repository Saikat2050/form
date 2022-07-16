const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const Data = require('./module/schema');
const {url} = require('./config/keys.json');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json())
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{
    console.log('connect to db');
    })
    .catch((err)=>{
    console.log(err);
    })

    var corsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
      }


app.post('/submit', (req, res) => {
    const data = new Data(req.body);
    data.save()
    .then((result)=>{
        console.log('Data Saved');
    })
    .catch((err)=>{
        console.log(err);
    })
});

app.listen(PORT);