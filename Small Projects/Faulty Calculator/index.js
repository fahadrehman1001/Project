/*Create a faulty calculator using javascript
This faulty calculator does following:
1) It takes two number as input from user
2) It performs wrong operations as follows:

1. + ---> -
2. * ---> +
3. - ---> /
4. / ---> **

It performs wrong operations 10% of the times
*/

let random = Math.random();
let a = prompt("Enter the first number");
let c = prompt("Enter the operator");
let b = prompt("Enter the second number");
console.log(random);
if (random > 0.1) {
  if (c == "+") {
    var d = a - b;
    console.log(d);
  } else if (c == "*") {
    d = a + b;
    console.log(d);
  } else if (c == "-") {
    d = a / b;
    console.log(d);
  } else if (c == "/") {
    d = a ** b;
    console.log(d);
  } else {
    console.log("Not Valid");
  }
  alert(`The result is ${d}`);
} else {
  if (c == "+") {
    var d = a - b;
    console.log(d);
  } else if (c == "*") {
    d = a + b;
    console.log(d);
  } else if (c == "-") {
    d = a / b;
    console.log(d);
  } else if (c == "/") {
    d = a ** b;
    console.log(d);
  } else {
    console.log("Not Valid");
  }
  alert(`The result is ${d}`);
}
