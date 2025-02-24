
// # find factor of the number 

let num =6
function findFactor(num){
    let factor = []
    for(let i=0;i <= num;i++){
        if(num % i===0){
            console.log(i)
            factor.push(i)
        }
    }
    return factor

}
console.log('factor of no :', findFactor(num))