// write a function to truncateString that take two arguments.
// (i.e long string display at minimum no of character and then next show as ....)

let str =
  "Hi vishal ramdas shinde at post wadgaon sahani tal -junnar dist pune";

function truncateString(str, maxChar) {
  // if(str.length <= maxChar){
  //     return str;
  // }
  if (str.length > maxChar) {
    return str.slice(0, maxChar) + " ...";
  }
}
console.log(truncateString(str, 12));


function truncateString1(str, maxChar){
    // if(str.length > maxChar){
    //     return str.substring(0, maxChar) + "..."
    // }
    if(maxChar <= 0 ) return
    name = str.substring(0, maxChar) + "....";
    newName = str.substring(0,maxChar).concat(" ....")
    console.log(name);
    console.log(newName)
}
console.log("truncate string ..",truncateString1(str, 14));
