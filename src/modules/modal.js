import { renderDetails } from "./renderDetails.js";

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
	document.addEventListener('keydown', escapeHandler);
}
const closeModal = function () {
	modalCart.classList.remove('show');
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

