// Carrossel principal
const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");
let contador = 0;

function slider() {
    const slideWidth = imagens[0].clientWidth;
    contador++;

    if (contador >= imagens.length) {
        contador = 0;
    }

    box.style.transition = "transform 0.7s ease-in-out";
    box.style.transform = `translateX(${-contador * slideWidth}px)`;
}

setInterval(slider, 2000);


// Carrossel de coluna e linha
const secoes = document.querySelectorAll(".coluna.linha");
const prevBtns = document.querySelectorAll(".prev-btn");
const nextBtns = document.querySelectorAll(".next-btn");

secoes.forEach((secao, index) => {
    const boxItens = secao.querySelector(".box-itens");
    const imagensItens = secao.querySelectorAll(".item");
    let contadorItens = 0;

    function sliderItens(direction) {
        const slideWidth = imagensItens[0].clientWidth;

        if (direction === "next") {
            contadorItens++;
        } else if (direction === "prev") {
            contadorItens--;
        }

        if (contadorItens >= imagensItens.length - 9) {
            contadorItens = 0;
        } else if (contadorItens < 0) {
            contadorItens = imagensItens.length - 1;
        }

        boxItens.style.transition = "transform 0.7s ease-in-out";
        boxItens.style.transform = `translateX(${-contadorItens * slideWidth}px)`;
    }

    prevBtns[index].addEventListener("click", () => {
        sliderItens("prev");
    });

    nextBtns[index].addEventListener("click", () => {
        sliderItens("next");
    });
});
