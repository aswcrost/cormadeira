document.addEventListener("DOMContentLoaded", () => {
    const menuHamburguer = document.querySelector(".menu-hamburguer");
    const navLinks = document.querySelector(".nav-links");
    const header = document.querySelector("header");

    // Alternar o menu ao clicar no ícone do hambúrguer
    menuHamburguer.addEventListener("click", () => {
        header.classList.toggle("expanded");
        navLinks.classList.toggle("active");
        menuHamburguer.classList.toggle("active");
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener("click", (event) => {
        if (!header.contains(event.target) && navLinks.classList.contains("active")) {
            header.classList.remove("expanded");
            navLinks.classList.remove("active");
            menuHamburguer.classList.remove("active");
        }
    });

    // Fechar o menu ao clicar em um item
    navLinks.addEventListener("click", (event) => {
        if (event.target.tagName === "A") { // Garante que foi clicado em um link
            header.classList.remove("expanded");
            navLinks.classList.remove("active");
            menuHamburguer.classList.remove("active");
        }
    });
});

document.querySelectorAll('.accordion').forEach(button => {
    button.addEventListener('click', () => {
        const isActive = button.classList.contains('active');
        document.querySelectorAll('.accordion').forEach(btn => {
            btn.classList.remove('active');
            btn.nextElementSibling.style.display = 'none';
        });

        if (!isActive) {
            button.classList.add('active');
            button.nextElementSibling.style.display = 'block';
        }
    });
});

// Seleciona o formulário e o elemento de feedback
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

// Adiciona evento de envio
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Exibe o indicador de carregamento
    feedback.innerHTML = '<span class="spinner"></span> Enviando...';

    // Prepara os dados do formulário
    const formData = new FormData(form);

    try {
        // Envia o formulário usando fetch
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
        });

        // Verifica a resposta e exibe mensagem de sucesso
        if (response.ok) {
            feedback.textContent = 'Mensagem enviada com sucesso!';
            feedback.style.color = 'green';
            form.reset(); // Limpa o formulário
        } else {
            throw new Error('Erro ao enviar o formulário.');
        }
    } catch (error) {
        // Exibe mensagem de erro
        feedback.textContent = 'Ocorreu um erro. Por favor, tente novamente.';
        feedback.style.color = 'red';
    }
});
