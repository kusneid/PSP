window.onload = function() {
  let a = "";
  let b = "";
  let expressionResult = "";
  let selectedOperation = null;
  let outputElement = document.getElementById("result");
  let accumulatedValue = 0;

  function setOutput(value) {
    outputElement.innerHTML = value;
  }

  function activeOperand() {
    return selectedOperation ? b : a;
  }

  function setActiveOperand(val) {
    if (selectedOperation) {
      b = val;
    } else {
      a = val;
    }
  }

  function formatExp(num) {
    if (!Number.isFinite(num)) return "Error";
    if (Math.abs(num) >= 1e10 || (Math.abs(num) > 0 && Math.abs(num) < 1e-12)) {
      return num.toExponential(9);
    }
    return num.toString();
  }

  function onDigitButtonClicked(digit) {
    let current = activeOperand();
    if (digit === "." && current.includes(".")) return;
    if (current === "0" && digit !== ".") current = "";
    current += digit;
    setActiveOperand(current);
    setOutput(current);
  }

  document.querySelectorAll('[id^="btn_digit_"]').forEach(button => {
    button.onclick = () => onDigitButtonClicked(button.innerHTML);
  });

  document.getElementById("btn_op_clear").onclick = function() {
    a = "";
    b = "";
    selectedOperation = null;
    expressionResult = "";
    setOutput("0");
  };

  document.getElementById("btn_op_mult").onclick = function() {
    if (a !== "") selectedOperation = "x";
  };
  document.getElementById("btn_op_plus").onclick = function() {
    if (a !== "") selectedOperation = "+";
  };
  document.getElementById("btn_op_minus").onclick = function() {
    if (a !== "") selectedOperation = "-";
  };
  document.getElementById("btn_op_div").onclick = function() {
    if (a !== "") selectedOperation = "/";
  };

  document.getElementById("btn_op_equal").onclick = function() {
    if (a === "" || b === "" || !selectedOperation) return;
    let x = +a, y = +b;
    switch (selectedOperation) {
      case "x": expressionResult = x * y; break;
      case "+": expressionResult = x + y; break;
      case "-": expressionResult = x - y; break;
      case "/": expressionResult = x / y; break;
    }
    const formatted = formatExp(expressionResult);
    a = formatted;
    b = "";
    selectedOperation = null;
    setOutput(formatted);
  };

  document.getElementById("btn_op_sign").onclick = function() {
    let current = activeOperand();
    current = current.startsWith("-") ? current.slice(1) : "-" + current;
    setActiveOperand(current);
    setOutput(current);
  };

  document.getElementById("btn_op_percent").onclick = function() {
    let current = activeOperand();
    if (current !== "") {
      const percent = (+current) / 100;
      const formatted = formatExp(percent);
      setActiveOperand(formatted);
      setOutput(formatted);
    }
  };

  document.getElementById("btn_op_backspace").onclick = function() {
    let current = activeOperand();
    if (current === "") return;
    current = current.slice(0, -1);
    if (current === "") current = "0";
    setActiveOperand(current);
    setOutput(current);
  };

  document.getElementById("btn_op_sqrt").onclick = function() {
    let current = activeOperand();
    if (current !== "") {
      const root = Math.sqrt(+current);
      const formatted = formatExp(root);
      setActiveOperand(formatted);
      setOutput(formatted);
    }
  };

  document.getElementById("btn_op_pow2").onclick = function() {
    let current = activeOperand();
    if (current !== "") {
      const squared = (+current) ** 2;
      const formatted = formatExp(squared);
      setActiveOperand(formatted);
      setOutput(formatted);
    }
  };

  function factorial(n) {
    if (n < 0) return "Error";
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
      if (!Number.isFinite(result)) return "Overflow";
    }
    return result;
  }

  document.getElementById("btn_op_factorial").onclick = function() {
    let current = activeOperand();
    if (current !== "" && current !== "-") {
      let num = +current;
      let fact = factorial(num);
      if (typeof fact === "number") {
        const formatted = formatExp(fact);
        setActiveOperand(formatted);
        setOutput(formatted);
      } else {
        setActiveOperand(fact);
        setOutput(fact);
      }
    }
  };

  document.getElementById("btn_op_000").onclick = function() {
    let current = activeOperand();
    if (current !== "" && current !== "0" && current !== "-") {
      current += "000";
      setActiveOperand(current);
      setOutput(current);
    }
  };

  document.getElementById("btn_op_accum_add").onclick = function() {
    accumulatedValue += Number(a || "0");
    const formatted = formatExp(accumulatedValue);
    a = formatted;
    setOutput(formatted);
  };

  document.getElementById("btn_op_accum_sub").onclick = function() {
    accumulatedValue -= Number(a || "0");
    const formatted = formatExp(accumulatedValue);
    a = formatted;
    setOutput(formatted);
  };

  document.getElementById("btn_op_color_result").onclick = function() {
    outputElement.classList.toggle("highlight");
  };

  document.getElementById("btn_op_custom").onclick = function() {
    let current = activeOperand();
    if (current !== "" && current !== "-") {
      const cubed = (+current) ** 3;
      const formatted = formatExp(cubed);
      setActiveOperand(formatted);
      setOutput(formatted);
    }
  };

  document.getElementById("btn_op_color").onclick = function() {
    document.body.classList.toggle("alt-bg");
  };
};
