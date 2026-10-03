function repeatString (string,num) {
    let result = ""
    
    for (let i = 0; i < num; i = i +1) {
result = result + string
    }
    if (num <0) {
        return "ERROR"
    }

    return result
}
console.log(repeatString("hey", -1))