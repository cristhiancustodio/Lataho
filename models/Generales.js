import QueryTypes from "sequelize";
import sequelize from "../config/db.js";


async function getTipoDocumento(){
    try {
        let resultado = await sequelize.query("SELECT * FROM tipo_documento WHERE estado = :estado",{
            replacements: {estado: 1}, type:QueryTypes.SELECT }
        );
        return resultado;
    } catch (error) {
        console.error("Error al ejecutar la consulta:", error);
        throw error;  // O maneja el error de la manera que prefieras
    }
}

export{
    getTipoDocumento,
}