// **const** str = 'one.two.three.four.five'  - преобразовать строку в объект


const str = "one.two.three.four.five"
const arr = str.split(".")

let obj = {...arr}

console.log(obj)