//Сортировка массива строк, массива чисел


let arr1 = ['Гранат', 'апельсин', 'Банан', 'Арбуз', 'Яблоко', 'Персик']
let arr2 = [3, 75, 8, 4, 10, 4]

function sortNumber(a,b) {
    return a-b
}

function sortStr(a,b) {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    
    }
    return 0;
}

console.log(arr1.sort(sortStr))
console.log(arr2.sort(sortNumber))