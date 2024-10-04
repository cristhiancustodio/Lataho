"use strict"
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";


const autenticacion = (() => {   

    const firebaseConfig = {
        apiKey: "AIzaSyAEC_y9SkjktrUS-hVyAi7rSIGncCBEE_8",
        authDomain: "asistencia-ff585.firebaseapp.com",
        projectId: "asistencia-ff585",
        storageBucket: "asistencia-ff585.appspot.com",
        messagingSenderId: "32833905561",
        appId: "1:32833905561:web:4a94a741f5c84501c86908",
        measurementId: "G-SLMXMGPQSV"
    };
    function google() {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);

        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                // La autenticación fue exitosa
                const user = result.user;
                console.log('Usuario autenticado:', user);
                alert(`Bienvenido, ${user.displayName}`);
            })
            .catch((error) => {
                // Manejar errores
                console.error('Error durante la autenticación:', error);
            });

        //const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential.accessToken;
        //const user = result.user;
    }


    return { google }
})();



document.getElementById('abrir-google').addEventListener('click', function (e) {
    autenticacion.google();
});
