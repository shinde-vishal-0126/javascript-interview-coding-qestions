
//# check given character is uppercase or lower case 

const isUpper= (char)=>{
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
        return ` char ${char} is upperCase character.`
    }else if(char.charCodeAt(0) >= 91 && char.charCodeAt(0) <=122){
        return` char ${char} is lower case character`
    }
}
console.log(isUpper('a'));