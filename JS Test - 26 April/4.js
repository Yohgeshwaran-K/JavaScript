function get(str) {
    return str.replace(
        function(char) {
        return charAt[0].toUpperCase();
        }
    )
}

let str = "bala";
let output = get(str);
console.log(output);
