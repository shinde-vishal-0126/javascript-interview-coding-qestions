

// # what is armStrong number 
// in the case of armstrong number of 3 digits the sum cube of each digits is equal to the number of itself 
// example 371 ==> length is 3 so 3*3*3 + 7*7*7 + 1*1*1 = 371 then thi is armstrong number.

// A number is an Armstrong number (or narcissistic number) if the sum of its digits, each raised to the power of the number of digits, equals the number itself.

let num = 3711

function findArmStrongNumber(num){
    let temp = num;
    let sum = 0
    let length = num.toString().length;
    while(temp > 0){
        let rem = temp % 10;
        sum = sum + rem ** length;
        temp =Math.floor(temp/10)
    }
    console.log(temp)

    if(sum === num){
        return 'given number is armStrong number';
    }else{
        return 'Given no is not armStrong number'
    }


}
console.log(findArmStrongNumber(num))