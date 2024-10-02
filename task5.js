// Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.

function isObj(a) {
    return (typeof a === "object" && a !== null && !Array.isArray(a) && !(a instanceof Date))
}

console.log(isObj({}))