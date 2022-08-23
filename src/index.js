import {renderTable} from "./modules/render.js";
import{modal} from "./modules/modal.js";
import {kontactsFixed} from "./modules/kontactsFixed.js";
import {data} from "./modules/data.js"
import {filter} from "./modules/filter.js";


renderTable(data);

const mobMenuBtn=document.querySelector('.mob-menu-btn');

document.addEventListener('click', event => {
    const target = event.target;
    console.log('target: ', target);
    const fixed = document.querySelector('.fixed');
    const viber = document.querySelector('.viber');
    const telegram = document.querySelector('.telegram');
    const instagramm = document.querySelector('.instagramm');
    const headerNavList = document.querySelector('.header_nav_list');
   
   
    if(!target.matches(".header_nav_item")&&headerNavList.matches(".open")){
        headerNavList.classList.remove('open');
    }

    if(target.closest('.mob-menu-btn')){
        headerNavList.classList.toggle('open');
    }
    

    if(target.matches('.card_details')){
		modal(target)
	}else if(!fixed.matches('.anima')){
        fixed.classList.add('anima');
        viber.classList.remove('show');
        telegram.classList.remove('show');
        instagramm.classList.remove('show');
    }else if(target.matches('.fixed')||target.matches('svg')||target.matches('path')){
        kontactsFixed(target)
    }else if(target.matches('.header_nav_item')){
        filter(target)
    }
    
})

