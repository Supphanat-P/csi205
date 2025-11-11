import { useState } from "react";
import Value from "./Value";

const Adder = ({ name }) => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    return (
        <div className="border border-2 border-black rounded-3 mx-auto mt-5 mb-5" style={{ width: 'fit-content' }}>
            <h1 className="text-center mt-3">{name || 'Adder'}</h1>
            <div className="d-flex justify-content-around mb-3 font-monospace fw-bold fs-4">
                <div className="bg-secondary badge fw-bold">A = {a}</div>
                <div className="bg-primary badge fw-bold">{a} + {b} = {a + b}</div>
                <div className="bg-secondary badge fw-bold">B = {b}</div>
            </div>
            <div className="d-flex">
                <Value name={'A'} value={a} setValue={setA} />
                <Value name={'B'} value={b} setValue={setB} />
            </div>
        </div>
    )
};

export default Adder