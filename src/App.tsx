import * as React from "react";
import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ["+", "-", "*", "/"];
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(0);

  useEffect(() => {
    console.log(result);
  }, [result]);

  const clickNumbers = (val: string) => {
    if (operation === "") setFirstNumber(firstNumber + val);
    else setSecondNumber(secondNumber + val);
  };

  const clickOperation = (val: string) => {
    setOperation(val);
  };

  const performOperation = () => {
    switch (operation) {
      case "+":
        setResult(Number(firstNumber) + Number(secondNumber));
        break;
      case "-":
        setResult(Number(firstNumber) - Number(secondNumber));
        break;
      case "*":
        setResult(Number(firstNumber) * Number(secondNumber));
        break;
      case "/":
        setResult(Number(firstNumber) / Number(secondNumber));
        break;
    }
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="display">{result}</div>
        <div className="buttons">
          <div className="leftSide">
            <div
              id="seeResult"
              onClick={() => {
                performOperation();
              }}
            >
              See Result
            </div>
            <div className="numbers">
              {numbers.map((value, key) => {
                return (
                  <div
                    id="individualNumber"
                    onClick={() => {
                      clickNumbers(value.toString());
                    }}
                  >
                    {value}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="leftSide">
            {operations.map((value, key) => {
              return (
                <div
                  id="operations"
                  onClick={() => {
                    clickOperation(value.toString());
                  }}
                >
                  {value}
                </div>
              );
            })}
          </div>
          <div className="rightSide"></div>
        </div>
      </div>
    </div>
  );
}
