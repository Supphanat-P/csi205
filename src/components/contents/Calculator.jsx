import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [screen, setScreen] = useState("0");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [phase, setPhase] = useState(1);
  const [lastOpp, setLastOpp] = useState(null);
  const [count, setCount] = useState(1);
  const [lastNum2, setLastNum2] = useState(null);
  const [equalCal, setEqualCal] = useState(null);

  const clamp9 = (val) => val.toString().slice(0, 9);

  const numClick = (number) => {
    if (phase === 1) {
      const next = `${num1}${number}`;
      setNum1(next);
      setScreen(clamp9(next));
    } else {
      const next = `${num2}${number}`;
      setNum2(next);
      setScreen(clamp9(next));
    }
  };

  const oppClick = (opp, oppId) => {
    if (phase === 2 && num2 !== "") {
      equalClick();
    }

    if (phase === 3 && equalCal !== null) {
      setNum1(equalCal.toString());
      setNum2("");
      setCount(1);
      setScreen(clamp9(equalCal));
    }

    setPhase(2);
    setScreen("");
    setLastOpp(oppId);
  };

  const equalClick = () => {
    if (phase === 1) return;

    let a = num1;
    let b = num2;

    if (b === "" || b === lastNum2) {
      setLastNum2(a);
      b = a;
    }

    const A = parseInt(a || "0", 10);
    const B = parseInt(b || "0", 10);

    let result = equalCal ?? 0;

    switch (lastOpp) {
      case "plus":
        result = count === 1 ? A + B : (equalCal ?? 0) + A;
        break;
      case "minus":
        result = count === 1 ? A - B : (equalCal ?? 0) - A;
        break;
      case "divide":
        if (B === 0) {
          setScreen("Err : Cannot divide by zero");
          return;
        }
        result =
          count === 1 ? Math.floor(A / B) : Math.floor((equalCal ?? 0) / A);
        break;
      case "mul":
        result = count === 1 ? A * B : (equalCal ?? 0) * A;
        break;
      default:
        return;
    }

    setEqualCal(result);
    setPhase(3);
    setScreen(clamp9(result));
    setCount((c) => c + 1);
  };

  const ceClick = () => {
    setScreen("0");
    setNum1("");
    setNum2("");
    setPhase(1);
    setLastOpp(null);
    setCount(1);
    setLastNum2(null);
    setEqualCal(null);
  };

  const opBtnClass = (id) =>
    `btn btn-green ${lastOpp === id ? "btn-yellow" : ""}`.trim();

  return (
    <div className="cal-container mb-3">
      <div className="display-screen">
        <input readOnly value={screen} maxLength={9} id="display-input input-cal" />
        <hr />
      </div>
      <div className="display-btn">
        <button className="btn btn-green" disabled>
          MC
        </button>
        <button className="btn btn-green" disabled>
          MR
        </button>
        <button className="btn btn-green" disabled>
          M+
        </button>
        <button className="btn btn-green" disabled>
          M-
        </button>
        <button className="btn btn-red" onClick={ceClick}>
          CE
        </button>
      </div>

      <div className="display-btn">
        <button className="btn btn-blue" onClick={() => numClick(7)}>
          7
        </button>
        <button className="btn btn-blue" onClick={() => numClick(8)}>
          8
        </button>
        <button className="btn btn-blue" onClick={() => numClick(9)}>
          9
        </button>
        <button
          className={opBtnClass("divide")}
          id="divide"
          onClick={() => oppClick("/", "divide")}
        >
          &divide;
        </button>
        <button className="btn btn-green" disabled>
          &radic;
        </button>
      </div>

      <div className="display-btn">
        <button className="btn btn-blue" onClick={() => numClick(4)}>
          4
        </button>
        <button className="btn btn-blue" onClick={() => numClick(5)}>
          5
        </button>
        <button className="btn btn-blue" onClick={() => numClick(6)}>
          6
        </button>
        <button
          className={opBtnClass("mul")}
          id="mul"
          onClick={() => oppClick("*", "mul")}
        >
          x
        </button>
        <button className="btn btn-green" disabled>
          %
        </button>
      </div>

      <div className="display-btn">
        <button className="btn btn-blue" onClick={() => numClick(1)}>
          1
        </button>
        <button className="btn btn-blue" onClick={() => numClick(2)}>
          2
        </button>
        <button className="btn btn-blue" onClick={() => numClick(3)}>
          3
        </button>
        <button
          className={opBtnClass("minus")}
          id="minus"
          onClick={() => oppClick("-", "minus")}
        >
          -
        </button>
        <button className="btn btn-green" disabled>
          1/x
        </button>
      </div>

      <div className="display-btn">
        <button className="btn btn-blue" onClick={() => numClick(0)}>
          0
        </button>
        <button className="btn btn-blue" disabled>
          .
        </button>
        <button className="btn btn-blue" disabled>
          +/-
        </button>
        <button
          className={opBtnClass("plus")}
          id="plus"
          onClick={() => oppClick("+", "plus")}
        >
          +
        </button>
        <button className="btn btn-green" id="equal" onClick={equalClick}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
