function gcd(x, y) {
    if (y === 0) {
        return x;
    } else {
        return gcd(y, x % y);
    }
}

function countCommonFact(x, y) {
    let commonFact = 0;
    let gcdValue = gcd(x, y);

    for (let i = 1; i <= Math.sqrt(gcdValue); i++) {
        if (gcdValue % i === 0) {
            commonFact += 2; 
            if (i === gcdValue / i) {
                commonFactors--; 
            }
        }
    }

    return commonFact;
}

// Example 
const x = 12;
const y = 18;
const result = countCommonFact(x,y);
console.log(result);
