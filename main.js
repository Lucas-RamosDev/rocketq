/* --- ABRE E FECHA O MENU QUANDO CLICAR NO ICONE --- */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
  element.addEventListener('click', function() {
    
    // se tiver a classe 'show' ele tira, se não tiver ele coloca a class 'show'.
    nav.classList.toggle('show')
  
  })
}

/* --- QUANDO CLICAR EM ALGUM ITEM DO MENU ESCONDER O MENU --- */

const links = document.querySelectorAll('nav ul li a')

for( const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}

/* --- MUDAR O HEADER DA PAGINA QUANDO DER SCROLL --- */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll(){

  window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight) {
      // scroll é maior que a altura do header
      header.classList.add('scroll')
    } else {
      // scroll é menor que a altura do header
      header.classList.remove('scroll')
    }
  })
}