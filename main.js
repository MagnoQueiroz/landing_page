

const element = document.querySelector("#header nav");

//this is expression function and anonymous function -- onde é uma função que é armazenada em uma variável(se n tivesse a variável seria uma função anonima), function declaration é uma função da forma padrão de certa forma é praticamente a mesma coisa, ja que de certa forma ela é armazenada para ser executada dps

const openMenu = () => element.classList.add("open");

const closeMenu = () => element.classList.remove("open");
