//Date.now() - преобразовать в текущую дату


const date = new Date(Date.now())
console.log(date)
console.log(typeof date)
console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toLocaleDateString())
console.log(date.toISOString().split("T")[0])