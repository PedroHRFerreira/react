import React, { useState } from "react";
import "./style.scss";

const Calculator = () => {
  const [valueCalculator, setValueCalculator] = useState("");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButton = (value) => setValueCalculator((prev) => prev + value);

  const handleOperator = (op) => {
    setPreviousValue(valueCalculator);
    setValueCalculator("");
    setOperator(op);
  };

  const calculate = () => {
    if (!previousValue || !operator) return;
    const current = parseFloat(valueCalculator);
    const previous = parseFloat(previousValue);

    const operations = {
      "+": previous + current,
      "-": previous - current,
      x: previous * current,
      "÷": previous / current,
      "%": (previous / 100) * current,
    };

    setValueCalculator(operations[operator].toString());
    setPreviousValue(null);
    setOperator(null);
  };

  const clearCalculator = () => {
    setValueCalculator("");
    setPreviousValue(null);
    setOperator(null);
  };

  return (
    <section className="calculator">
      <input type="text" maxLength="30" value={valueCalculator} readOnly />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
        <button key={num} onClick={() => handleButton(num)}>
          {num}
        </button>
      ))}
      {["+", "-", "x", "÷", "%", ","].map((op) => (
        <button
          className="calculator--button"
          key={op}
          onClick={() => handleOperator(op)}
        >
          {op}
        </button>
      ))}
      <button className="calculator--save" onClick={calculate}>
        =
      </button>
      <button className="calculator--clean" onClick={clearCalculator}>
        limpar
      </button>
    </section>
  );
};

export default Calculator;
