import { auth } from './config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// O código roda assim que a página abre
onAuthStateChanged(auth, (user) => {
    const isLoginPage = window.location.href.includes("login.html");

    if (user) {
        // --- CENÁRIO: USUÁRIO LOGADO ---
        if (isLoginPage) {
            // Se está logado e tenta entrar no login, joga pro menu
            window.location.href = "index.html";
        } else {
            // Se está numa página interna (index, lista, vendas), REVELA o conteúdo
            // "block" é o padrão do HTML para mostrar elementos
            document.body.style.display = "block"; 
        }
    } else {
        // --- CENÁRIO: USUÁRIO NÃO LOGADO ---
        if (!isLoginPage) {
            // Se tenta acessar qualquer página interna, chuta pro login IMEDIATAMENTE
            window.location.href = "login.html";
        } else {
            // Se já está no login, REVELA a tela de login
            // "flex" é usado no login para centralizar a caixinha
            document.body.style.display = "flex"; 
        }
    }
});

// Função de Sair
window.sair = async () => {
    try {
        await signOut(auth);
        alert("Até logo!");
        // O próprio onAuthStateChanged vai perceber que saiu e redirecionar
    } catch (error) {
        console.error("Erro ao sair", error);
    }
}
