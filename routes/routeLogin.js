const express = require("express");

const usuarioController = require("../controller/usuarioController");


const login = express.Router()


login.get("/", usuarioController.index);

login.get("/:id", usuarioController.verUsuario);

login.post("/registrar-usuario", usuarioController.registrarUsuario);

login.post("/actualizar-usuario/:id", usuarioController.actualizarUsuario);

login.get("/eliminar-usuario/:id", usuarioController.eliminarUsuario)

module.exports = login;