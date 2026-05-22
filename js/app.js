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
            } // CORRIGIDO: Fechamento correto da chave do IF de validação

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



        // Verificar se já existe uma sessão ativa ao carregar a página
        verificarLogin();

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

                // CORRIGIDO: Comparação usando as variáveis e propriedades corretas
                if (usuario === usuarioCadastrado.emailCadastro && senha === usuarioCadastrado.senhaCadastro) {
                    
                    // CORRIGIDO: Adicionado o valor do usuário na sessão
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

        function verificarLogin() {
            // Procurar sessão salva
            let usuario = sessionStorage.getItem("usuarioLogado");

            // Se existir uma sessão, redireciona para evitar a tela de login
            if (usuario !== null) {
                // Se for o admin, vai para a tela de ADM, senão vai para a index
                if (usuario === "admin@faunaalerta.com.br") {
                    window.location.href = "adm.html";
                } else {
                    window.location.href = "index.html"; // Mude para a página inicial do usuário
                }
            }
        }
