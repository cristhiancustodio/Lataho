

document.getElementById("frm-register-usuario").addEventListener("submit", async function(e){
    e.preventDefault();

    const fmr = new FormData(this);

    axios.post("/login/registrar-usuario", fmr )
    .then((result) => {
        console.log(result);
        
    }).catch((err) => {
        console.log(err);
        
    });
});
