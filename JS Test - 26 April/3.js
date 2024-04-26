function get(num) {
    return num.map(n => n * 2)
}

let num = [1, 2, 3, 4, 10]
let two = get(num)
console.log(two)
