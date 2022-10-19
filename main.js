// Menu fixo
window.addEventListener('scroll', ()=>{
	let nav = document.querySelector('nav')
	nav.classList.toggle('sticky', window.scrollY > 0)
})

// OnClick do icons do menu na versão mobile
let menuIcon = document.querySelector('#menu-icon')
let mobIcon = document.querySelector('.mob-menu')
const onToggleMenu = () => {
	menuIcon.name = menuIcon.name === "menu" ? "close" : "menu"
	mobIcon.classList.toggle('open')
}