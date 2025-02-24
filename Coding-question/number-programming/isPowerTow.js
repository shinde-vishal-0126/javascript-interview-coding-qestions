
// #  write a function called isPowerTwo that take an integer num as input and return true if num is a power of two and false otherwise

function isPowerTow(num){
    let op = false

    if(num == 0 || num < 0){
        return 'this is not power of two'
    }
    for(let i=1;i< num ;i++){
        if(2**i == num){
            op = true
        }
    }
    return op

}
console.log(isPowerTow(2))