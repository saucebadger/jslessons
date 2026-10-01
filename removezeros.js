function removeZeros(arr) {
    for (let i = 0; i < arr.length; i = i+ 1)
    if (arr[i] === 0) {
        arr.splice(i,1)
        i = i - 1
    }
}
let nums = [4,0,0,7,0,2]
removeZeros(nums)
console.log(nums)