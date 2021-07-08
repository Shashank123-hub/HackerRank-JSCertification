'use strict';

const fs = require('fs');


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function stripProperty(obj, prop) {
  delete obj[prop]  //Our goal here is to remove the existing(if do) prop from obj
  return obj;      //Hence, we can directly use delete to remove if from obj literal
}
function main() {
