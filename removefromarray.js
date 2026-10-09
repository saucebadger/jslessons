function removeFromArray (arr,...num) {
    let newarray = arr.filter((item) =>{ 
        return !num.includes(item)
    })
    return newarray
}
console.log (removeFromArray([1,2,3,4,5,],5))