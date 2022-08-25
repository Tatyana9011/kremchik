import { renderDetails } from "./renderDetails.js";
//блокировка скрола  //можно через document.body.style.overflow = 'hidden'? а потом ''
const disableScroll = () => {
	//узнаем ширину страници и отнимаем ширину документа - так узнаем сколько ширина скрола
	const widthScroll = window.innerWidth - document.body.offsetWidth;
	//добавляем свойство dbScrollY в обьект document.body
	document.body.dbScrollY = window.scrollY;
	document.body.style.cssText = `
	position:fixed;
	top:${-window.scrollY}px;
	left: 0;
	width: 100%;
	height: 100hv;
	overflow: hidden;
	padding-right: ${widthScroll}px`;
  };
  
  const enableScroll = () => {
	document.body.style.cssText = '';
	//прокручивает окно на 200 пкселей
	/* window.scroll({
	  top: '200'
	}) */
  
	window.scroll({
	  top: document.body.dbScrollY
	});
  };
  

export function modal(target){
	if(target.matches('.card_details')){
		openModal(target)
        renderDetails(target)
		
	}
}


const modalCart = document.querySelector('#modal-cart');
const overlay = document.querySelector('.overlay');

const openModal = function (event) {
	modalCart.classList.add('show');
	disableScroll()
	document.addEventListener('keydown', escapeHandler);
}
const closeModal = function () {
	modalCart.classList.remove('show');
	enableScroll()
	document.removeEventListener('keydown', escapeHandler);
}
const escapeHandler = (event) => {
	if (event.code === 'Escape') {
		closeModal();
	}
}
overlay.addEventListener('click', (event) => {
	const target = event.target;
	if (target.classList.contains('modal-close') || target.classList.contains('overlay')) {
		closeModal();
	}
})

