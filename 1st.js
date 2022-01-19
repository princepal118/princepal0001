function double(arr){
    arr.map((item)=>{
        return item*2;
    });
}

const output = double([1,2,3,4,5]);
console.log(output);