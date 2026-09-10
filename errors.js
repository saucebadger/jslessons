function accessChecker(name, age) {

  if (age >= 18) {
    let message = name + " has access";
    return message;
  } else {
    let message = name + " does not have access";
    return message;
  }

}

console.log(accessChecker("Brook", 15));