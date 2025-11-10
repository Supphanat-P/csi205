import { useEffect, useState } from "react";
import Value from "./Value";

const Temp = ({ name }) => {
  const [c, setC] = useState(0);
  const [f, setF] = useState(c * 1.8 + 32);
  const [k, setK] = useState(c + 273.15);
  const [changed, setChanged] = useState("C");

  const ctof = (c) => c * 1.8 + 32;
  const ctok = (c) => c + 273.15;

  const ftoc = (f) => (f - 32) / 1.8;
  const ftok = (f) => (f - 32) / 1.8 + 273.15;

  const ktoc = (k) => k - 273.15;
  const ktof = (k) => (k - 273.15) * 1.8 + 32;

  useEffect(() => {
    if (changed === "C") {
      setF(ctof(c));
      setK(ctok(c));
    }
  }, [c]);

  useEffect(() => {
    if (changed === "F") {
      setC(ftoc(f));
      setK(ftok(f));
    }
  }, [f]);

  useEffect(() => {
    if (changed === "K") {
      setC(ktoc(k));
      setF(ktof(k));
    }
  }, [k]);

  return (
    <div
      className="border border-2 border-black rounded-3 mx-auto mt-5"
      style={{ width: "fit-content" }}
    >
      <h1 className="text-center mt-3">{name || "Temp Converter"}</h1>
      <div className="d-flex justify-content-around mb-3 font-monospace fw-bold fs-4">
        <div className="bg-secondary badge fs-3 fw-bold">
          {c.toFixed(2)} <sup>o</sup>C
        </div>
        <div className="bg-primary badge fs-3 fw-bold">
          {f.toFixed(2)} <sup>o</sup>F
        </div>
        <div className="bg-secondary badge fs-3 fw-bold">
          {k.toFixed(2)} <sup>o</sup>K
        </div>
      </div>
      <div className="d-flex">
        <Value
          name="CELSIUS"
          value={c}
          setValue={(v) => {
            setC(v);
            setChanged("C");
          }}
          type="real"
        />
        <Value
          name="FAHRENHEIT"
          value={f}
          setValue={(v) => {
            setF(v);
            setChanged("F");
          }}
          type="real"
        />
        <Value
          name="KELVIN"
          value={k}
          setValue={(v) => {
            setK(v);
            setChanged("K");
          }}
          type="real"
        />
      </div>
    </div>
  );
};

export default Temp;
