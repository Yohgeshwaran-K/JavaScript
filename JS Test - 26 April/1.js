function calculate(n1, n2) {
    
    let add = n1 + n2
    
    let subtract = n1 - n2
   
    let multiply = n1 * n2
    
    let divide = n1 / n2
   
    return {
        addition: add,
        subtraction: subtract,
        multiplication: multiply,
        division: divide
    }
}

let result = calculate(20, 4)
console.log("Addition:", result.addition)
console.log("Subtraction:", result.subtraction)
console.log("Multiplication:", result.multiplication)
console.log("Division:", result.division)
