

// # find out the intersection of the array 
// The intersection of two arrays consists of elements that are common in both arrays

let array  =[1,3,4,5,7,6,9,10,10,10]
let array2 = [3,5,6,10,11]

function findInterSection(array, array2){
    const intersection = array.filter((ele, index)=>{
        return array2.includes(ele);
    })
    return [...new Set(intersection)] ;
}
console.log(findInterSection(array, array2));



// # using without inbuilt method 


function intersection(array, array2){
    let map = {};
    let result = [];

    for(let num of array){
        console.log("num",num)
        map[num] = (map[num] || 0) + 1;
    }

    console.log(map);

    for(let num of array2){
        if(map[num] > 0){
            result.push(num);
            map[num] --;
        }
    }
    return result ;

}

console.log(intersection(array, array2));