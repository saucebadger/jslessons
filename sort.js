function sortArray(arr) {
    arr.sort((a,b) => {
        return b - a
    })
}
let array = [1,3,5,7,9]
sortArray(array)
console.log(array)