
export function addSelect(select, card){

    card.variation.forEach((elem,j)=>{
        const newElemOption = document.createElement('option');
        newElemOption.setAttribute('value',`${elem}-ml`);
        newElemOption.textContent=`${elem} мл.`;
        newElemOption.classList.add('attached_enabled');
        if(j===0){
            newElemOption.setAttribute("selected","selected")
        }
        select.append(newElemOption);
    })
}