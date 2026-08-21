const smallestCommons = (arr) => {
     const sortedArr = arr.sort((a, b) => a - b);
     const [min, max] = sortedArr;
     const range = Array.from({ length: max - min + 1 }, (_, i) => i + min);

     const lcm = (a, b) => {
         const gcd = (x, y) => (!y ? x : gcd(y, x % y));
         return (a * b) / gcd(a, b);
     };

     return range.reduce((acc, curr) => lcm(acc, curr));
}

console.log(smallestCommons([1, 5]));