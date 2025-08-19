const botaoFiltrar = document.querySelector(".btn-filtrar");
const section = document.querySelector(".container-noticias");
const containerJogos = document.querySelector(".jogos");

const mediaQuery = window.matchMedia("(max-width: 768px)");

botaoFiltrar.addEventListener("click", function () {
  const categoriaSelecionada = document.querySelector("#categoria").value;
  
  /*      passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida baseado nos filtros que a pessoa digitou */
  const jogos = document.querySelectorAll(".jogo");
  jogos.forEach(function (jogo) {
    const categoriaJogo = jogo.dataset.categoria;
    
    let mostrarJogo = true;
    
    const temFiltroDeCategoria = categoriaSelecionada !== "";
    
    const jogoNaoBateComFiltroDeCategoria =
    categoriaSelecionada.toLowerCase() !== categoriaJogo.toLowerCase();
    
    if (temFiltroDeCategoria && jogoNaoBateComFiltroDeCategoria) {
      mostrarJogo = false;
    }
    
    
    if (mostrarJogo) {
      jogo.classList.add("mostrar");
      jogo.classList.remove("esconder");
    } else {
      jogo.classList.remove("mostrar");
      jogo.classList.add("esconder");
    }
    
    
    
  });
});
/* 
  if (mediaQuery.matches) {
    containerJogos.appendChild(section);
  } */

  if (window.matchMedia("(max-width: 768px)").matches) {
    containerJogos.appendChild(section);
    section.scrollIntoView({ behavior: "smooth", block: "end" });
  }