const express = require('express')
const RouterModel = require("./routes/clothRoute");
const cors = require("cors");
const app = express()
const port = 8080
const mongoose = require('mongoose');

app.use(cors())
app.use(express.json());
app.use('/', RouterModel);


mongoose.connect('mongodb+srv://aslanzmazmp202:aslan2004@clusterimmigration.njfsy.mongodb.net/chlothes?retryWrites=true&w=majority&appName=ClusterImmigration')
  .then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
    console.log('Connected!')});


    