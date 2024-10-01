import express from 'express'

import usuarioController from '../controller/usuarioController.js';

const login = express.Router()


login.get("/", usuarioController.index);

login.get("/:id", usuarioController.verUsuario);

login.post("/registrar-usuario", usuarioController.registrarUsuario);

login.post("/actualizar-usuario/:id", usuarioController.actualizarUsuario);

login.get("/eliminar-usuario/:id", usuarioController.eliminarUsuario)

export default login;