import {data} from "./data.js";
import {addSelect} from "./addSelect.js";
import {variationPrice} from "./variationPrice.js";


export function renderDetails(target){
  const modal = document.querySelector(".modal");
  const id = target.dataset.id
  
  
  modal.innerHTML = "";

  const getCard =  data.find(elem=>elem.id===id);

    const newElem = document.createElement('div');

    let table=[];
    
    getCard.variation.forEach((obem, i)=>{
        const tr = document.createElement('tr');
        tr.innerHTML = `<td class="value">${obem} мл.</td>
                        <td class="price">${getCard.price[i]} грн</td>`
        return table.push(tr)
    })

    newElem.classList.add('card');
    newElem.innerHTML=`
                <button class="modal-close">x</button>
                <img class="modal_img" src="${getCard.src}" alt="card-1" >

                <div class="card_variation">
                    <div class="card_title">${getCard.title}</div>
                    <div class="card_discription">${getCard.discription}</div>
                    <table  class="table_variation">
                        <tbody>
                            <tr>
                                <th class="label">
                                    <p>Об'єм</p>
                                </th>
                                <th class="label">
                                    <p>Цiна</p>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                      
                </div> `;
        

    modal.append(newElem); 
    const tbody = document.querySelector('tbody')  
    tbody.append(...table)
    
   // <table  class="table_variation">
                        //<tbody>
                           // <tr>
                              //  <th class="label">
                                  //  <label for="obyom">Об'єм</label>
                               // </th>
                               // <td class="value">
                                 //   <select name="obyom" id="obyom">
                                  //      <option value="">Виберіть необхідний об'єм </option>
                                 //   </select>
                               // </td>
                            //</tr>
                       // </tbody>
                   // </table>
   // const select = modal.querySelector("select");

   //addSelect(select,getCard)
    //variationPrice(select,getCard)
       
}
