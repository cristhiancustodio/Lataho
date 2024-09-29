const { DataTypes, Model, Op} = require('sequelize')

const sequelize = require("../config/db.js")

class Usuarios extends Model {
    static async getUsuarios() {
        return await this.findAll({
            where: {
                dni: {
                    [Op.gt]: 18
                }
            }
        })
    }
    static async todo(){
        return await sequelize.query('SELECT * FROM usuarios');     
    }
}
Usuarios.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idtipo_documento: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull:true,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    modelName: 'Usuarios',
    tableName: 'usuarios',
    timestamps: false // Desactiva la creación de campos de tiempo
});


module.exports = Usuarios;