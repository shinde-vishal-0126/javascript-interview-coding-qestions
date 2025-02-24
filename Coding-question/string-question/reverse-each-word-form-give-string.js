

// # reverse the words of the give string 
//| i.e return the word in reverse order.
// input: 'hello form the javascript word';
// output :word javascript the form hello

let str = 'hello form the javascript word';
function reverseWord(str){
    str = str.split(" ").reverse().join(" ");
    console.log(str);
}
console.log(reverseWord(str))


// # without using inbuilt method 

function reverseWord1(str){
    let word = '';
    let words =[];
    for(let i = 0;i<str.length;i++){
        if(str[i] === ' '){
            if(!word == ''){
                words.push(word);
                word = '';
            }
        }else{
            word = word + str[i]
        }
    }
    // During the loop, words are added to the words array only when a space (" ") is encountered. However, the very last word of the string does not end with a space, so it won't be added to words inside the loop. To address this, we explicitly check for any remaining word after the loop ends and add it to words.

    if(!word == ''){
        words.push(word)
    }
    
    let reverse = ''
    for(let i= words.length-1; i >=0;i--){
        reverse = reverse + words[i]
        if(!i == 0){
            reverse = reverse + " "
        }
    }
    return reverse;
}
console.log(reverseWord1(str))