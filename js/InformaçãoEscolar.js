function handleResize() {
    if (window.matchMedia("(max-width: 767px)").matches) {
        document.body.classList.add("mobile");
        document.body.classList.remove("desktop");
    } else {
        document.body.classList.add("desktop");
        document.body.classList.remove("mobile");
    }
}

// Executa a função ao carregar a página
document.addEventListener("DOMContentLoaded", handleResize);

// Adiciona um listener para mudanças no tamanho da tela
window.addEventListener("resize", handleResize);
