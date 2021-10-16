const express = require("express");
const app = express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const core=require('cors');

dotenv.config();

const port = process.env.PORT || 5000;

// const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.dqxva.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}?retryWrites=true&w=majority`;

const MONGO_URI = process.env.DATABASE_ACCESS;

app.use(expres.json()); //body-parser
app.use(cors());


try{
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },()=>{
    console.log("Database connected");
  })

    app.listen(port,()=>console.log(`server is connected to port ${port}`));
  }
  catch{
    console.log("Some problem in connecting server or database");
  }