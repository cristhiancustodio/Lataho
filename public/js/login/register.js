

document.getElementById("frm-registrar-usuario").addEventListener("submit", async function (e) {
    e.preventDefault();

    const fmr = new FormData(document.getElementById("frm-registrar-usuario"));

    let id = fmr.get('id_usuario') || 0;

    const post = {
        nombre: fmr.get('nombre') || '',
        apellido: fmr.get('apellido') || '',
        correo: fmr.get('correo') || '',
        telefono: fmr.get('telefono') || '',
        dni: fmr.get('dni') || 0,
        idtipo_documento: fmr.get('idtipo_documento') || '',
        usuario: fmr.get('usuario') || '',
        password: fmr.get('password') || '',
    };
    if(id > 0 ){
        actualizarUsuario(id, post);
    }else{
        registrarUsuario(post);
    }

});
const actualizarUsuario = async (id, post) => {
    axios.post(`/login/actualizar-usuario/${id}`, post)
    .then((result) => {
        let data = result.data;
        if (data.error == false) {
            alert('Usuario actualizado correctamente');
        }
    }).catch((err) => {
        alert('Ocurrio un error ' + err);
    });
}

const registrarUsuario = async (post) => {
    axios.post("/login/registrar-usuario", post)
    .then((result) => {
        let data = result.data;
        if (data.error == false) {
            alert(data.mensaje);
        }
    }).catch((err) => {
        alert('Ocurrio un error ' + err);
    });
}