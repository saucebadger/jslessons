function reverseString(strng) {
    let result = ""
for (let i=strng.length-1; i >=0; i = i - 1) {
    result = result + strng[i]
}
return result
}

console.log(reverseString("baffled"))