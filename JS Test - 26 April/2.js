function even(num) {
    return num.filter(n => n % 2 == 0);
}

let num = [1, 2, 3, 4, 5];
let evenNum = even(num)
console.log(evenNum); 
