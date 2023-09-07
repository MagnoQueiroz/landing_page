
const menu = document.querySelector(".icon-menu");

const element = document.querySelector("nav");
const close_menu = document.querySelector(".icon-close");

//this is expression function and anonymous function -- onde é uma função que é armazenada em uma variável(se n tivesse a variável seria uma função anonima), function declaration é uma função da forma padrão de certa forma é praticamente a mesma coisa, ja que de certa forma ela é armazenada para ser executada dps


function toggleMenu(open = false) {
    const elementClassList = element.classList
    //se tá aberto fecha
    if (open == true) {
        elementClassList.remove("open");
    } else {
        //se tá fechado abre
        elementClassList.add("open");
    }
}
/*
menu.addEventListener("click", toggleMenu(false))
close_menu.addEventListener("click", toggleMenu(true));

function toggleMenu(valor) {
    const elementClassList = element.classList
    //se tá aberto fecha
    if (valor == true) {
        elementClassList.remove("open");
    } else {
        //se tá fechado abre
        elementClassList.add("open");
    }
}

*/