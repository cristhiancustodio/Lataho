const { Sequelize } = require('sequelize');


// Crear una instancia de Sequelize y conectarse a una base de datos SQLite
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: './base_datos.db', // Ruta del archivo de la base de datos
	logging: console.log, // Habilita el logging de consultas
});

module.exports = sequelize;