function copyArray(arr){
 let newarr = arr.slice()
 newarr.sort() 
 return newarr
}
console.log(copyArray([4,5,6,1,9]))