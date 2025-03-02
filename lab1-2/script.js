window.onload = function() {
  let a = "";
  let b = "";
  let expressionResult = "";
  let selectedOperation = null;
  let outputElement = document.getElementById("result");
  let digitButtons = document.querySelectorAll('[id^="btn_digit_"]');
  let accumulatedValue = 0;

  function onDigitButtonClicked(digit) {
    if (!selectedOperation) {
      if (digit !== "." || (digit === "." && !a.includes("."))) {
        a += digit;
      }
      outputElement.innerHTML = a;
    } else {
      if (digit !== "." || (digit === "." && !b.includes("."))) {
        b += digit;
      }
      outputElement.innerHTML = b;
    }
  }

  digitButtons.forEach(button => {
    button.onclick = function() {
      onDigitButtonClicked(button.innerHTML);
    };
  });

  document.getElementById("btn_op_mult").onclick = function() {
    if (a === "") return;
    selectedOperation = "x";
  };

  document.getElementById("btn_op_plus").onclick = function() {
    if (a === "") return;
    selectedOperation = "+";
  };

  document.getElementById("btn_op_minus").onclick = function() {
    if (a === "") return;
    selectedOperation = "-";
  };

  document.getElementById("btn_op_div").onclick = function() {
    if (a === "") return;
    selectedOperation = "/";
  };

  document.getElementById("btn_op_clear").onclick = function() {
    a = "";
    b = "";
    expressionResult = "";
    selectedOperation = null;
    outputElement.innerHTML = 0;
  };

  document.getElementById("btn_op_equal").onclick = function() {
    if (a === "" || b === "" || !selectedOperation) return;
    switch (selectedOperation) {
      case "x":
        expressionResult = (+a) * (+b);
        break;
      case "+":
        expressionResult = (+a) + (+b);
        break;
      case "-":
        expressionResult = (+a) - (+b);
        break;
      case "/":
        expressionResult = (+a) / (+b);
        break;
    }
    a = expressionResult.toString();
    b = "";
    selectedOperation = null;
    outputElement.innerHTML = a;
  };

  document.getElementById("btn_op_sign").onclick = function() {
    if (!selectedOperation) {
      a = a.startsWith("-") ? a.slice(1) : "-" + a;
      outputElement.innerHTML = a;
    } else {
      b = b.startsWith("-") ? b.slice(1) : "-" + b;
      outputElement.innerHTML = b;
    }
  };

  document.getElementById("btn_op_percent").onclick = function() {
    if (!selectedOperation) {
      if (a !== "") {
        a = (+a / 100).toString();
        outputElement.innerHTML = a;
      }
    } else {
      if (b !== "") {
        b = (+b / 100).toString();
        outputElement.innerHTML = b;
      }
    }
  };

  document.getElementById("btn_op_backspace").onclick = function() {
    if (!selectedOperation) {
      a = a.slice(0, -1);
      if (a === "") a = "0";
      outputElement.innerHTML = a;
    } else {
      b = b.slice(0, -1);
      if (b === "") b = "0";
      outputElement.innerHTML = b;
    }
  };

  document.getElementById("btn_op_color").onclick = function() {
    document.body.classList.toggle("alt-bg");
  };

  document.getElementById("btn_op_sqrt").onclick = function() {
    if (!selectedOperation) {
      if (a !== "") {
        expressionResult = Math.sqrt(+a);
        a = expressionResult.toString();
        outputElement.innerHTML = a;
      }
    } else {
      if (b !== "") {
        expressionResult = Math.sqrt(+b);
        b = expressionResult.toString();
        outputElement.innerHTML = b;
      }
    }
  };

  document.getElementById("btn_op_pow2").onclick = function() {
    if (!selectedOperation) {
      if (a !== "") {
        expressionResult = (+a) ** 2;
        a = expressionResult.toString();
        outputElement.innerHTML = a;
      }
    } else {
      if (b !== "") {
        expressionResult = (+b) ** 2;
        b = expressionResult.toString();
        outputElement.innerHTML = b;
      }
    }
  };

  function factorial(n) {
    if (n < 0) return "Error";
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }

  document.getElementById("btn_op_factorial").onclick = function() {
    if (!selectedOperation) {
      if (a !== "") {
        expressionResult = factorial(+a).toString();
        a = expressionResult;
        outputElement.innerHTML = a;
      }
    } else {
      if (b !== "") {
        expressionResult = factorial(+b).toString();
        b = expressionResult;
        outputElement.innerHTML = b;
      }
    }
  };

  document.getElementById("btn_op_000").onclick = function() {
    if (!selectedOperation) {
      a += "000";
      outputElement.innerHTML = a;
    } else {
      b += "000";
      outputElement.innerHTML = b;
    }
  };

  document.getElementById("btn_op_accum_add").onclick = function() {
    accumulatedValue += Number(a || "0");
    a = accumulatedValue.toString();
    outputElement.innerHTML = a;
  };

  document.getElementById("btn_op_accum_sub").onclick = function() {
    accumulatedValue -= Number(a || "0");
    a = accumulatedValue.toString();
    outputElement.innerHTML = a;
  };

  document.getElementById("btn_op_color_result").onclick = function() {
    outputElement.classList.toggle("highlight");
  };

  document.getElementById("btn_op_custom").onclick = function() {
    if (!selectedOperation) {
      expressionResult = (+a) ** 3;
      a = expressionResult.toString();
      outputElement.innerHTML = a;
    } else {
      expressionResult = (+b) ** 3;
      b = expressionResult.toString();
      outputElement.innerHTML = b;
    }
  };
};
