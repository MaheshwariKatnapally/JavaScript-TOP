function add(n) {
  return n + 7;
}

console.log(add(5));

function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 3));

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

console.log(capitalize("love"));

function lastLetter(text) {
  return text.slice(-1);
}

console.log(lastLetter("Love"));
