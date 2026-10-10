function convertToFahrenheit (temp) {
     let result = Math.round((((temp * 9 / 5) + 32) * 10)) / 10
    return result
}
console.log(convertToFahrenheit(20))