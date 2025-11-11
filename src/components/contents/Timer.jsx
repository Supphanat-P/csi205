import { useState, useEffect } from "react";

const Timer = () => {
    const [run, setRun] = useState(false);
    const [timer, setTimer] = useState(68);

    useEffect(() => {
        if (!run) return;

        const intervalId = setInterval(() => {
            setTimer((p) => p + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [run]);

    const formattime = (p) => {
        let time = timer;
        const secDay = 86400;
        const secHours = 3600;
        const secMin = 60;

        const days = Math.floor(time / secDay);
        time %= secDay
        const hours = Math.floor(time / secHours);
        time %= secHours
        const min = Math.floor(time / secMin);
        const sec = time % secMin;

        if (days > 0) {
            return days + "d " + hours + "h " + min + "min " + sec + "s ";
        } if (hours > 0) {
            return hours + "h " + min + "min " + sec + "s ";
        } if (min > 0) {
            return min + "min " + sec + "s ";
        } if (sec > 0) {
            return sec + "s ";
        }
    };


    return (
        <div
            className="border-2 border border-black rounded-3 p-2 m-auto bg-black bg-opacity-10"
            style={{ width: "fit-content" }}
        >
            <h1 className="text-center text-navy">TIMER</h1>
            <div className="d-flex justify-content-center mb-2">
                <input className="rounded-3 text-end fw-bold p-2 fs-5 w-100" value={formattime() || 0 + "s"} readOnly />
            </div>
            <div className="d-flex justify-content-around">
                <button className="btn btn-danger w-auto fs-3" onClick={() => { setTimer(0), setRun(false) }}>
                    <i className="bi bi-arrow-counterclockwise"></i> &nbsp; Reset
                </button>

                <button id="runBtn" className={"btn btn-" + (run ? "warning" : "success") + " w-auto fs-3"} onClick={() => setRun((p) => !p)}>
                    <i className="bi bi-play"></i> &nbsp; {run ? "Pause" : "Run"}
                </button>
            </div>
        </div>
    );
};

export default Timer;
