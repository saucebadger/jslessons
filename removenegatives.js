function removesNegatives(arr) {
for (let i = 0; i < arr.length; i = i + 1) 
    if (arr[i] <0) {
        arr.splice(i,1)
        i = i -1

    }

}
let array = [3, -1, 5, -7, 2]
removesNegatives(array)
console.log(array)