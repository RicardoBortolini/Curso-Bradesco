

'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {

    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    const className = document.body.className;

    console.log("nome da classe atual: " + className);

    if (document.body.classList.contains('dark-theme')) {
        this.textContent = "Claro";
    } else {
        this.textContent = "Escuro";
    }

});