
export function textReplas(text){

    let str=``
    if(text.length>=38){
        str=`${text.substring(0, 38)}...`
        return str
    }else{
        return text
    }
    
}




