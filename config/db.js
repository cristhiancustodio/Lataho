import Sequelize from 'sequelize';

// Crear una instancia de Sequelize y conectarse a una base de datos SQLite
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: './base_datos.db', // Ruta del archivo de la base de datos
	logging: console.log, // Habilita el logging de consultas
	retry: {
		max: 5, // Número de intentos de reconexión en caso de fallo
	},
	pool: {
		max: 5, // Máximo número de conexiones en el pool
		min: 0, // Mínimo número de conexiones en el pool
		acquire: 30000, // Tiempo máximo en milisegundos que Sequelize intentará obtener una conexión
		idle: 10000, // Tiempo en milisegundos antes de que una conexión inactiva sea liberada
	},
});

export default sequelize;