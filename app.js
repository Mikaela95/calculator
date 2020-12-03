/* $("button").click(function() {
  let result = $(this).val();
  console.log(result);
}) */

let operand1 = false;
let operand2 = false;
let operatorCurrent = false;
let total = '';

/* check = () => {
  let operand3 = false;
  if(!operand3){
    console.log("operand is false");
  }
} */

onNumberClick = (num) => {
  console.log(num);
};

const displayResult = (result) => {
  if (result) {
    $('#result').text(result);
  }
}

$("button").on("click", (e) => {
  const buttonValue = e.target.innerHTML;
  if (buttonValue >= 0 && buttonValue <= 9) {
    onNumberClick(buttonValue);
  } else if (buttonValue === "AC") {
    console.log("must be an AC");
  } else {
    console.log("you an operand bro!");
  }
});


check();