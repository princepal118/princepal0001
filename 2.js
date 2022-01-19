
// 2nd question;


function takes(arr,num){
    console.log(num);
    return arr.forEach(function(item){return console.log(item)});
}
console.log(takes([1,2,3,4,5],8));