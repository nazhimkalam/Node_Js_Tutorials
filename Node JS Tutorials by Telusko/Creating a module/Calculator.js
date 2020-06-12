function add(a, b) {
    console.log(a + b);
  }
function sub(a, b) {
    console.log(a - b);
}
function mul(a, b) {
  console.log(a * b);
}
function div(a, b) {
  console.log(a / b);
}

exports.addition = add;
exports.subtraction = sub;
exports.product = mul;
exports.division = div;
