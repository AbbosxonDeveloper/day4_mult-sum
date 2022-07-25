'classwork'
// // let datas = [
// //     { income: 500, expanse: 200 },
// //     { income: 500, expanse: 200 },
// //     { income: 500, expanse: 200 },
// //     { income: 500, expanse: 200 },
// // ]

// // let finance = (data, str) =>
// //     data.reduce((acc, el) => el[str] ? acc += el[str] : acc += (el['income'] - el['expance']), 0)


// // console.log(finance(datas, 'expanse'));

// function moveZere(arr) {
//     for (let i = arr.length; i > 0; i--) {
//         if (arr[i] == 0) {
//             arr.splice(i, 1)
//             arr.push(0)
//         }
//     }
//     return arr
// }

// let array = [1, 2, 3, 4, -1, 0, 5, 0, 10]
// let number = 5
// console.log(moveZere(array));


'birinchi'
let mult = (a, b) => {
    a = Math.floor(a)
    b = Math.floor(b)
    if (!b) return 0
    return Math.floor(a + mult(a, b - 1))
}

console.log(mult(5.5, 2.2));


'ikkinchi'
let number = 35678

function sum(num, col = 0) {
    col++
    if (num < 1) return 0
    return (parseInt(num.pop()) + sum(num))
}
number = number.toString().split('')


console.log(sum(number));