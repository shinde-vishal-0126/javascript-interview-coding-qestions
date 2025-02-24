
// # how to convert first latter of string into uppercase latter 

let str = 'vishal shinde'
function makeFirstLatterUpperCase(str){
    let array = str.split(" ");
    console.log(array);
    return array.map((element, index)=>{
       return element.charAt(0).toUpperCase() + element.slice(1)
    }).join(" ")
}

console.log(makeFirstLatterUpperCase(str))