function camelize(str) {
    let string = str.split("-")
    console.log(string)

    let newarray = string.map((word,index) => {
        if (index === 0) {
            return word
        }
        else {
            return word[0].toUpperCase() + word.slice(1)
        }
    })
    return newarray.join("")
}
console.log(camelize("camel-tart"))