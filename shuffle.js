function shuffleArray(arr){
    for (let i = 0; i < arr.length; i = i+ 1) {

let randomIndex = Math.floor(Math.random() * arr.length)
let temp = arr[i]
arr[i] = arr[randomIndex]
arr[randomIndex] = temp
}
}
let array = [1, 2, 3, 4, 5]

shuffleArray(array)

console.log(array)