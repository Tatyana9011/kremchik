import { textReplas } from "./textReplas.js";

export function renderTable(data){
  const cards = document.querySelector(".cards");

  cards.innerHTML=``;
  
    data.forEach((item,i)=>{
        const textDescription=textReplas(item.discription);
        const newElem = document.createElement('div');

        newElem.classList.add('card');
        newElem.innerHTML=`
            <img class="card_img" src="${item.src}" alt="card-1" >
            <div class="card_title">${item.title}</div>
            <span class="card_price">${item.price[0]} грн</span>
            <span class="card_details" data-id="${item.id}" >Детальніше</span>`;

        cards.append(newElem);   

    })
    
}