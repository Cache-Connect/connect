const express = require("express");
const app = express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const cors=require('cors');
const companyForm = require("./Routes/companyForm");

dotenv.config();

const port = process.env.PORT || 5000;

// const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.dqxva.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}?retryWrites=true&w=majority`;

const MONGO_URI = process.env.DATABASE_ACCESS;

app.use(express.json()); //body-parser
app.use(cors());

  mongoose.connect(MONGO_URI ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=>console.log("db connected"))
  .catch((err)=>console.log(err))
  
  app.listen(port,()=>console.log(`server is connected to port ${port}`));
  app.use(companyForm);

