require('dotenv/config');
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const todoRoutes = require("./routes/todoRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();



app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);
app.use("/api/users", userRoutes);

mongoose.connect('mongodb+srv://2610sachinsharma:1155@Jai@cluster0.gpg0sfy.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'mernstack'
})
.then(()=>{
  console.log('Database Connection is ready...')
})
.catch((err)=> {
  console.log(err);
})

//Server
app.listen(3000, ()=>{

  console.log('server is running http://localhost:3000');
})