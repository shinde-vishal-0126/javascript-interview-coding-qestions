
// write a function to convert give string into a came case
let str = "hi vishal shinde"
function camelcase(str){
    str = str.split(" ");
    const data = str.map((ele, index)=>{
        if(index === 0){
            return ele.toLowerCase();
        }else{
            return ele.charAt(0).toUpperCase() + ele.slice(1)
        }
    })

    return data.join("")

}
console.log(camelcase(str))




// convert string into the snack_case
const snackCase = (str) =>{
    // first we need to convert into the array of element
    str = str.split(" ");
    console.log(str)
   const data = str.map((ele, index)=>{
        return ele.toLowerCase();
    })
    console.log(data.join("_")) // now its return snack case

    
}
snackCase(str)