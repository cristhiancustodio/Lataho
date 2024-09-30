const express = require('express')
const path = require('path');


//MOTOR DE HTML
const { create } = require('express-handlebars');
const sequelize = require('./config/db');
//sequelize.sync({ force: false }) // Cambia a `true` solo si deseas eliminar las tablas existentes y recrearlas

const router = require('./routes/index');
const login = require('./routes/routeLogin');
const Helpers = require('./helpers/helpers');


const app = express();


app.use(express.json());


//ZONA DE CONFIGURACION DEL SISTEMA
const hbs = create({
	extname: ".hbs",
	partialsDir: ["views/layouts/section", "views/components"],
	helpers: Helpers
});

app.use(express.urlencoded({ extended: true }));
// MOTOR DE HTML
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/views/img"));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
//FIN ZONA CONFIGURACION DEL SISTEMA

// zona de rutas




app.use('/', router);
app.use('/login', login);


/**cuando sea produccion */
// app.use((req, res, next) => {
// 	res.status(404).send("Sorry can't find that!")
// });
// app.use((err, req, res, next) => {
// 	console.error(err.stack)
// 	res.status(500).send('Something broke!')
// })

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Corriendo en el puerto ${PORT}`)
})