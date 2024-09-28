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
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Usuarios',
    tableName: 'usuarios',
    timestamps: false // Desactiva la creación de campos de tiempo
});


module.exports = Usuarios;