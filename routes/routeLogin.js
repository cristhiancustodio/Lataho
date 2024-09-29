const express = require("express");
const { getTipoDocumento } = require("../models/Generales");
const Usuarios = require("../models/Usuario");
const login = express.Router()


login.get("/", async (req, res) => {
    let lista_tipo_documento = await getTipoDocumento();
    
    return res.render("login/index",{
        lista_tipo_documento: lista_tipo_documento,
    });
});
login.post("/registrar-usuario", (req, res) => {
    let body = req.body;
    let resultado = Usuarios.create(body);
    req.flash('success', 'Account Created.');
    return res.render("login/index",{
        layout: false,
    });
});

module.exports = login;