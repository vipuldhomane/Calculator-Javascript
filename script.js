let string = "";
let buttons = document.querySelectorAll(".button");
let display = document.getElementById("text-area");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      var ans = eval(string);
      console.log(ans);
      display.innerHTML = ans;
      string = ans;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      display.innerHTML = string;
    } else {
      console.log(e.target);
      string += e.target.innerHTML;
      display.innerHTML = string;
    }
  });
});
