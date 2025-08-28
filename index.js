const fs = require('fs');
const input = JSON.parse(fs.readFileSync('input.json', 'utf8'));

const baseConverter = require('bigint-base-converter');
function decodeBase(value, base) {
  if (base <= 36) {
    return BigInt(parseInt(value, base));
  }
  // For bases > 36 or very large numbers:
  return BigInt(baseConverter.dec(value, base));
}

const n = input.keys.n;
const k = input.keys.k;
let xs = [], ys = [];

for (let i = 1; i <= n; ++i) {
  if (input.hasOwnProperty(i.toString())) { // Check if key exists
    const base = parseInt(input[i].base, 10);
    const value = input[i].value;
    const y = decodeBase(value, base);
    xs.push(i);
    ys.push(y);
    console.log(`Root x=${i}, y=${y}`);
  } else {
    console.warn(`Key '${i}' not found in input JSON`);
  }
}

function lagrangeInterpolation(xs, ys, x_at = 0) {
  let k = xs.length;
  let secret = BigInt(0);
  for (let i = 0; i < k; ++i) {
    let term = ys[i];
    for (let j = 0; j < k; ++j) {
      if (i !== j) {
        term = term * BigInt(x_at - xs[j]) / BigInt(xs[i] - xs[j]);
      }
    }
    secret += term;
  }
  return secret;
}
const secret = lagrangeInterpolation(xs.slice(0, k), ys.slice(0, k), 0);
console.log("Secret (c) is:", secret.toString());
