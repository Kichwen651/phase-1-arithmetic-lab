let num1 = 31; 
let num2 = 2;
let multiply = num1 * num2;
console.log (multiply);

let min = 1; 
let max = 100; 
let random = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(random);

let num3 = 14; 
let num4 = 10; 
let mod = num3 % num4;

console.log(mod); 


function getMax(f, g, h, i, j) {
    let max = f;

    max = (g > max) ? g : max;
    max = (h > max) ? h : max;
    max = (i > max) ? i : max;
    max = (j > max) ? j : max;

    return max;
}

const highest = getMax(5, 12, 20, 8, 15);
console.log(highest);  




