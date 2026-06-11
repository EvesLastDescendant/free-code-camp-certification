const num = 5;

function factorialCalculator(n) {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
  // if (n === 0) {
  //   return 1;
  // } else {
  //   return n * factorialCalculator(n-1);
  // }
    return result;
}
const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);