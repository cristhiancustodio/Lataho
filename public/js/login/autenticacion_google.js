import { initializeApp } from "../../../node_modules/firebase/firebase-app.js";




//const { initializeApp } = require('firebase/app');
//const { getAuth, GoogleAuthProvider, signInWithPopup } = require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyAEC_y9SkjktrUS-hVyAi7rSIGncCBEE_8",
    authDomain: "asistencia-ff585.firebaseapp.com",
    projectId: "asistencia-ff585",
    storageBucket: "asistencia-ff585.appspot.com",
    messagingSenderId: "32833905561",
    appId: "1:32833905561:web:4a94a741f5c84501c86908",
    measurementId: "G-SLMXMGPQSV"
};


const app = initializeApp(firebaseConfig);

export function google(){

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    
    const result = signInWithPopup(auth, provider);
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
}