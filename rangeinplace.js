function filterRangeInPlace(arr,a,b) {
for (let i = 0; i < arr.length; i = i + 1) {
    if (arr[i] < a || arr[i] > b) {
    arr.splice(i,1) 
    i = i - 1
    }
}
}
let arr = [1,2,3,4,5]
filterRangeInPlace(arr,3,5)
console.log(arr)