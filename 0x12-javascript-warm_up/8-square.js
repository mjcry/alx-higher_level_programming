#!/usr/bin/node
// Thi's a script in JavaScript that prints a square of a given size using the character X

const { argv } = require('process');
const n = parseInt(argv[2]);

if (!n) {
  console.log('Missing size');
}
for (let i = 0; i < n; i++) {
  for (let b = 0; b < n; b++) {
    process.stdout.write('X');
  }
  console.log('');
}
