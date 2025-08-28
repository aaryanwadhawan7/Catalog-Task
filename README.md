# Catalog Placements Assignment - Polynomial Secret Recovery

## Overview
This Node.js project reads polynomial roots encoded in various bases from a JSON file, decodes them, and performs polynomial interpolation to find the secret constant term of the polynomial.

## Features
- Parses JSON input with roots encoded in different bases
- Decodes large base-N numbers using `bigint-base-converter`
- Uses Lagrange interpolation to reconstruct polynomial and find the secret
- Handles missing keys safely and supports large numbers

## Installation & Usage
1. Install Node.js.
2. Clone the repo and run `npm install`.
3. Place the input JSON file (`input.json`) in the root folder.
4. Execute with `node index.js`.
5. The secret constant term will be printed.

## Input Format
The input JSON must have:
- `"keys"`: with total roots `n` and minimum roots `k`.
- Root entries with `"base"` and `"value"` fields.

Example:
{
"keys": { "n": 4, "k": 3 },
"1": { "base": "10", "value": "4" },
"2": { "base": "2", "value": "111" },
"3": { "base": "10", "value": "12" },
"6": { "base": "4", "value": "213" }
}


## Notes
- Lagrange interpolation finds the polynomial’s constant coefficient (the secret).
- Suitable for handling various bases and large value sizes.

