import { auth } from './config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
    const isLoginPage = window.location.href.includes("login.html");

    if (user) {
        if (isLoginPage) {
            window.location.href = "index.html";
        } else {
            document.body.style.display = "block"; 
        }
    } else {
        if (!isLoginPage) {
            window.location.href = "login.html";
        } else {
            document.body.style.display = "flex"; 
        }
    }
});

window.sair = async () => {
    try {
        await signOut(auth);
        alert("Até logo!");
    } catch (error) {
        console.error("Erro ao sair", error);
    }
}
