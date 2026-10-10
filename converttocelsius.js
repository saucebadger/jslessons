function convertToCelsius (temp) {
    let result = Math.round(((temp - 32) * 5 / 9) * 10) / 10
    return result
}
console.log(convertToCelsius(89))