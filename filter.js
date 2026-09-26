function filterRange(arr,a,b) {
let newArray = arr.filter((number) => {
    return number >= a && number <= b    
})
return newArray
}
console.log(filterRange([4,5,6,7,8,9],5,8))