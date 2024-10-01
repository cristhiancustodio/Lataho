import express from 'express';

import { create } from 'express-handlebars';

import router from './routes/index.js';
import login from './routes/routeLogin.js';

import Helpers from './helpers/helpers.js';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


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