document.addEventListener("DOMContentLoaded", function() {
    
    const btnDestaque = document.getElementById("btn-destaque");
    const projetos = document.querySelectorAll(".project-card .card");

    btnDestaque.addEventListener("click", function() {

        projetos.forEach(card => {
            card.classList.remove("highlight-project");
        });

        if(projetos.length > 0) {
            projetos[0].classList.add("highlight-project");

            btnDestaque.textContent = "Projeto Destacado!";

            setTimeout(() => {
                btnDestaque.textContent = "Destacar Melhor Projeto";
            }, 2000);
        }
    });
});