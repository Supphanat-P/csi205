import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Animation.css";
import basketball from "../../assets/basketball.png";
import football from "../../assets/football.png";
import volleyball from "../../assets/volleyball.png";
import human from "../../assets/human.png";
import cartoon from "../../assets/cartoon.png";

const Animation = () => {
  const [run, setRun] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [deg, setDeg] = useState(0);
  const [Clicked, setClicked] = useState(null);
  const vx = 10;
  const vy = 10;
  let fieldHeight = 500;
  let fieldWidth = 700;
  let ballDiameter = 200;
  const maxY = fieldHeight - ballDiameter - 2 * 1;
  const maxX = fieldWidth - ballDiameter - 2 * 1;
  const [right, setRight] = useState(true);
  const [down, setDown] = useState(true);
  const [bounce, setBounce] = useState(false);
  const [rotSpeed, setRotSpeed] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      if (run) {
        setX((prevX) => {
          if (prevX + (right ? vx : -vx) >= maxX) {
            setRight(false);
            setBounce(false);
            setRotSpeed(Math.floor(Math.random() * (10 - 5 + 1)) + 5);
            return maxX;
          }
          if (prevX + (right ? vx : -vx) <= 0) {
            setRight(true);
            setBounce(true);
            setRotSpeed(Math.floor(Math.random() * (10 - 5 + 1)) + 5);
            return 0;
          }
          return prevX + (right ? vx : -vx);
        });
        setY((prevY) => {
          if (prevY + (down ? vy : -vy) >= maxY) {
            setDown(false);
            setBounce(false);
            setRotSpeed(Math.floor(Math.random() * (10 - 5 + 1)) + 5);
            return maxY;
          }
          if (prevY + (down ? vy : -vy) <= 0) {
            setDown(true);
            setBounce(true);
            setRotSpeed(Math.floor(Math.random() * (10 - 5 + 1)) + 5);
            return 0;
          }
          return prevY + (down ? vy : -vy);
        });
        setDeg((prevDeg) => prevDeg + (bounce ? rotSpeed : -rotSpeed));
      }
    }, 50);
    return () => clearInterval(interval);
  }, [run, right, down, bounce, rotSpeed]);

  useEffect(() => {
    const ball = document.getElementById("ball");
    if (ball) {
      ball.style.transform = `translate(${x}px, ${y}px) rotate(${deg}deg)`;
    }
  }, [x, y, deg]);

  const imageChange = (e) => {
    const img = e.target.getAttribute("data-img");
    const ballName = e.target.getAttribute("data-name");
    const ball = document.getElementById("ball");
    setClicked(ballName);
    if (img) {
      ball.style.backgroundImage = `url(${img})`;
    } else {
      ball.style.backgroundImage = "none";
    }
  };

  useEffect(() => {
    const buttons = document.querySelectorAll(".anim-controls .ps-4 button");
    buttons.forEach((button) => {
      button.addEventListener("click", imageChange);
    });
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", imageChange);
      });
    };
  }, []);
  return (
    <>
      <div className="container mt-2 position-relative mb-2" style={{ width: "fit-content" }}>
        <div
          className="anim-field m-auto"
          style={{ width: `${fieldWidth}px`, height: `${fieldHeight}px` }}
        >
          <div
            className="ball"
            id="ball"
            style={{ width: `${ballDiameter}px`, height: `${ballDiameter}px` }}
          ></div>
        </div>
        <div className="anim-controls d-flex justify-content-start gap-1 mt-3">
          <button
            className="btn text-white w-100"
            style={{ backgroundColor: run ? "red" : "green" }}
            onClick={() => setRun(!run)}
          >
            {run ? (
              <i className="bi bi-pause"></i>
            ) : (
              <i className="bi bi-play"></i>
            )}
            {run ? "Stop" : "Run"}
          </button>
          <div className="ps-4 gap-1 d-flex">
            <button
              className={`btn ${
                Clicked === "none" ? "btn-primary" : "btn-outline-primary"
              }`}
              data-img={null}
              data-name="none"
            >
              None
            </button>
            <button
              className={`btn ${
                Clicked === "basketball" ? "btn-primary" : "btn-outline-primary"
              }`}
              data-img={basketball}
              data-name="basketball"
            >
              Basketball
            </button>
            <button
              className={`btn ${
                Clicked === "football" ? "btn-primary" : "btn-outline-primary"
              }`}
              data-img={football}
              data-name="football"
            >
              Football
            </button>
            <button
              className={`btn ${
                Clicked === "volleyball" ? "btn-primary" : "btn-outline-primary"
              }`}
              data-img={volleyball}
              data-name="volleyball"
            >
              Volleyball
            </button>
            <button
              className={`btn ${
                Clicked === "human" ? "btn-primary" : "btn-outline-primary"
              }`}
              data-img={human}
              data-name="human"
            >
              Human
            </button>
            <button
              className={`btn ${
                Clicked === "cartoon" ? "btn-primary" : "btn-outline-primary"
              }`}
              data-img={cartoon}
              data-name="cartoon"
            >
              Cartoon
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Animation;
