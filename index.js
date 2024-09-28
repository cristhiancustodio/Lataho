
const express = require('express')
const router = require('./routes');
const sequelize = require('./config/db');
const app = express()


app.use(express.json());


app.use('/', router);


const port = 4000;
app.listen(port, () => {
  console.log(`Corriendo en el puerto ${port}`)
})