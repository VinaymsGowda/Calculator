let numbers = document.querySelectorAll(".number");

let equalpressed = 0;
let input = 0;

const expression = document.querySelector("#expression");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (equalpressed == 1) {
      expression.value = "";
      equalpressed = 0;
    }
    expression.value += number.value;
  });
});

let equal = document.querySelector(".equal");

equal.addEventListener("click", () => {
  equalpressed = 1;
  let solution = eval(expression.value);
  if (isNaN(solution)) {
    expression.value = "Invalid Number";
  }
  if (Number.isInteger(solution)) {
    expression.value = solution;
  } else {
    expression.value = solution.toFixed(2);
  }
});

let clear = document.querySelector(".CLR");

clear.addEventListener("click", () => {
  expression.value = "";
});

let DEL = document.querySelector(".DEL");
DEL.addEventListener("click", () => {
  let cur = expression.value;
  expression.value = cur.substr(0, cur.length - 1);
});
