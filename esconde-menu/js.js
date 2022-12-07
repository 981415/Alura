const botaoMenu = document.querySelector('.botaoMenu')
const menu = document.querySelector('.formulario')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('formulario--ativo')
})