import {renderTable} from './render.js';
import {data} from './data.js';

renderTable(data);

export function filter(target){
    const links = document.querySelectorAll(".header_nav_item");
    const title = document.querySelector('.header_title');

    links.forEach(link => link.style.textDecoration =  'none');

    target.style.textDecoration =  'underline';

    const newData = data.filter(item=>item.navLink===target.textContent);

    if(newData.length){
       
        renderTable(newData);

    }else{

        const cards = document.querySelector('.cards');
        cards.innerHTML = '<title class="header_worn">Нажаль цього товару нема в наявностi.</title> ';
        
    }
  

}