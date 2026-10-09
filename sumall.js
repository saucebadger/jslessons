function sumAll (a,b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 1 || b < 1) {
    return "ERROR"
}
let total = 0

let small = Math.min(a, b)
let large = Math.max(a, b)
for (let i = small; i <= large; i++) {
    total = total + i
}
return total
}

console.log(sumAll(6,1))