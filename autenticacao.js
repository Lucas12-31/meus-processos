import { auth } from './config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Verifica se está logado
onAuthStateChanged(auth, (user) => {
    if (!user) {
        // Se NÃO tem usuário, manda pro Login
        // Mas só se já não estivermos na página de login pra não dar loop infinito
        if (!window.location.href.includes("login.html")) {
            window.location.href = "login.html";
        }
    } else {
        // Se JÁ tem usuário e tentar acessar o login, manda pro menu
        if (window.location.href.includes("login.html")) {
            window.location.href = "index.html";
        }
    }
});

// Função de Sair (Logout) para usar nos botões
window.sair = async () => {
    try {
        await signOut(auth);
        alert("Desconectado com sucesso!");
        window.location.href = "login.html";
    } catch (error) {
        console.error("Erro ao sair", error);
    }
}
