document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");

    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            // Impede o recarregamento imediato da página e o envio padrão
            event.preventDefault();

            // Pega os valores digitados no forms
            const nomeCadastro = document.getElementById("nomeCadastro").value;
            const emailCadastro = document.getElementById("emailCadastro").value;
            const telCadastro = document.getElementById("telCadastro").value;
            const senhaCadastro = document.getElementById("senhaCadastro").value;
        
            // Validação simples para evitar campos vazios
            if (!nomeCadastro || !emailCadastro || !telCadastro || !senhaCadastro) {
                alert("Por favor, preencha todos os campos obrigatórios.");
                return;
            } //Fechamento correto da chave do IF de validação

            // cria um objeto para agrupar as informações do usuario
            const cadastro = {nomeCadastro, emailCadastro, telCadastro, senhaCadastro};
            
            // converte as informações em um texto JSON e salva
            localStorage.setItem("usuarioRegistrado", JSON.stringify(cadastro));
            
            // Exibe um alerta de sucesso
            alert("Cadastro realizado com sucesso");
            
            // redireciona o usuario para a pagina de login
            window.location.href = "login.html";
        });
    }
});


function fazerLogin() {
    // Pegar os valores digitados no form
    let usuario = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value;

     // 1. CONDIÇÃO DO ADMINISTRADOR
    if (usuario === "admin@faunaalerta.com.br" && senha === "123") {
         sessionStorage.setItem("usuarioLogado", usuario);
        window.location.href = "adm.html";
         return; // Para a execução aqui se for admin
     }

     // 2. BUSCA AS INFORMAÇÕES NO LOCALSTORAGE (Para usuários comuns)
     let dadosSalvos = localStorage.getItem("usuarioRegistrado");

     if (dadosSalvos) {
        // Converte o texto JSON de volta para um objeto JavaScript
           let usuarioCadastrado = JSON.parse(dadosSalvos);

          //Comparação usando as variáveis e propriedades corretas
           if (usuario === usuarioCadastrado.emailCadastro && senha === usuarioCadastrado.senhaCadastro) {
                    
            //Adicionado o valor do usuário na sessão
            sessionStorage.setItem("usuarioLogado", usuario);

            // Abrir página do usuário comum (ajuste o nome do arquivo se necessário)
            window.location.href = "perfil.html"; 
            return;
        } else {
            alert("Usuário ou senha incorretos.");
        }
    } else {
        alert("Nenhum usuário cadastrado no sistema.");
    }
}

// Substitua a chamada automática que está no seu código por esta:
verificarLogin();

function verificarLogin() {
    // 1. Pega o usuário logado na sessão
    let usuario = sessionStorage.getItem("usuarioLogado");
    
    // 2. Descobre em qual página o usuário está agora
    let paginaAtual = window.location.pathname;

    // CASO 1: O usuário NÃO está logado
    if (usuario === null) {
        // Se ele não está logado e NÃO está na página de login, manda pro login
        if (!paginaAtual.includes("login.html") && !paginaAtual.includes("cadastro.html")) {
            alert("Acesso negado. Por favor, faça login.");
            window.location.href = "login.html";
        }
    } 
    // CASO 2: O usuário ESTÁ logado
    else {
        // Se ele já está logado e tenta entrar na tela de login de bobeira, manda pro lugar certo
        if (paginaAtual.includes("login.html")) {
            if (usuario === "admin@faunaalerta.com.br") {
                window.location.href = "adm.html";
            } else {
                window.location.href = "perfil.html";
            }
        }
        // Se ele já estiver na perfil.html ou adm.html, o código NÃO FAZ NADA (deixa a página carregar em paz)
    }
}

// Chame a função para rodar assim que a página carregar
document.addEventListener("DOMContentLoaded", () => {
    exibirBoasVindas();
});

function exibirBoasVindas() {
    // 1. Pega o elemento do HTML onde o nome deve aparecer
    const elementoNome = document.getElementById("nome-usuario");
    
    // Se o elemento não existir nesta página, cancela a execução para não dar erro
    if (!elementoNome) return;

    // 2. Busca os dados salvos no localStorage
    const dadosSalvos = localStorage.getItem("usuarioRegistrado");

    if (dadosSalvos) {
        // 3. Converte a string JSON de volta para objeto
        const usuarioCadastrado = JSON.parse(dadosSalvos);
        
        // 4. Pega o nome do cadastro (garantindo que ele existe)
        if (usuarioCadastrado.nomeCadastro) {
            // Altera o texto do elemento para incluir a mensagem
            elementoNome.textContent = `Bem-vindo, ${usuarioCadastrado.nomeCadastro}`;
        }
    } else {
        // Caso não encontre nenhum cadastro (ex: o admin logou ou histórico limpo)
        elementoNome.textContent = "Bem-vindo, Usuário";
    }
}

function sair(event) {
    // 1. Evita que a página de perfil recarregue ou faça o comportamento padrão do botão/link
    if (event) event.preventDefault();

    // 2. Limpa a sessão do usuário
    sessionStorage.removeItem('usuarioLogado');

    // 3. Redireciona explicitamente para o login
    window.location.href = 'login.html';
}

