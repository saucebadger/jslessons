function filterUnique (arr) {
    let newarray = []
    for (const item of arr) {
if (!newarray.includes(item)) {
newarray.push(item)
}
    }
    return newarray
}
console.log(filterUnique(["ps3", "ps3", "ps3"]))