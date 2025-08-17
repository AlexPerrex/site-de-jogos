const botaoFiltrar = document.querySelector(".btn-filtrar");

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
