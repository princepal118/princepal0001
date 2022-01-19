
const fun = (arr,num)=>{
    for(i=0;i<=arr.length;i++){
        if(num == arr[i]){
            return "Element found at index "+i;
        }
    }
    return -1;
}
const output = fun([1,2,3,4,5,6,7],4);
console.log(output)










































