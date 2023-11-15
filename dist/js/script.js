// NAVBAR
window.onscroll = function(){
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop

    if(window.pageYOffset > fixedNav){
        header.classList.add('header-fixed')
    }else{
        header.classList.remove('header-fixed')
    }
}

//HAMBURGER MENU
const hamburger = document.querySelector('#hamburger')
const headerMenu = document.querySelector('#nav-menu')
hamburger.addEventListener('click', function(){
    headerMenu.classList.toggle('hidden')
    hamburger.classList.toggle('hamburger-active')
})