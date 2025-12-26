const display = document.getElementById("display");   
const buttons = document.querySelectorAll(".btn");        

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === 'C') {

      display.textContent = "0";
      return;
    }

    if (value === "=") {
      calculateSafe(display.textContent);
      return;
    }

    if (display.textContent === "0") {
      display.textContent = value;

    } else {
      display.textContent += value;
    }
    
  });
});

function calculateSafe(expression) {
  expression = expression
  .replace(/√(\d+)/g, "Math.sqrt($1)")
  .replace(/x/g, "*")
  .replace(/÷/g, "/");


  try {
    const result = new Function("return " + expression)();
    display.textContent = result;
  } catch (error) {
    display.textContent = "Erreur";
  }
}