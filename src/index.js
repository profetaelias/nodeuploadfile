const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const connectMongoose = require('./config/mongoose')

connectMongoose();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(morgan("dev"));
app.use(require('./routes'));

app.listen(3001);