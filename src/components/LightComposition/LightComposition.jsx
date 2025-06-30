// LightComposition.jsx
import React, { useState } from "react";
import Styles from "./LightComposition.module.css";
import ObjFile from "./ObjFile.jsx";

export default function LightComposition() {
  const [config, setConfig] = useState({
    rows: 10,
    cols: 10,
    pattern: "wave",
    spacing: 20,
    surfaceHeight: 170,
    surfaceLength: 0,
    surfaceWidth: 0,
    baseOffset: 10,
    lowest: 0,
    highest: 150,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "pattern"){
      setConfig((prev) => ({ ...prev, [name]: value }));
    }else{
      setConfig((prev) => ({ ...prev, [name]: parseInt(value, 10) }));
    }

if (name === "surfaceHeight") {
    if (value < config.highest || value < config.lowest) {
      setConfig((prev) => ({ ...prev, highest: value, lowest: value }));
    }
  }
  };

  const handleGenerate = () => {
  setConfig((prev) => ({
    ...prev,
    version: prev.version + 1,
  }));
};


  return (
    <div className={Styles.wrapper}>
      <div className={Styles.panel}>
        <label>
          Pattern:
          <select name="pattern" value={config.pattern} onChange={handleChange}>
            {[
              "checkerboard",
              "diagonal",
              "dome",
              "flat",
              "mirror",
              "random",
              "ripple",
              "spiral",
              "wave",
            ].map((p) => (
              <>
                <option key={p} value={p}>
                  {p}
                </option>
              </>
            ))}
          </select>
        </label>

        {[
          { labelName : "Rows", name: "rows", max: 20, min: 1, val: 0 },
          { labelName : "Column", name: "cols", max: 20, min: 1, val: 0 },
          { labelName : "Spacing", name: "spacing", max: 100, min: 0, val: 0 },
          { labelName : "Base Plate Length", name: "surfaceLength", max: 999, min: 0, val: 0 },
          { labelName : "Base Plate Width", name: "surfaceWidth", max: 999, min: 0, val: 0 },
          { labelName : "Base Plate From Floor", name: "surfaceHeight", max: 999, min: 0, val: 0 },
          { labelName : "Base Plate Offset", name: "baseOffset", max: 30, min: 0, val: 0 },
          { labelName : "Lowest", name: "lowest", max: 999, min: 0, val: 0 },
          { labelName : "Highest", name: "highest", max: 999, min: 0, val: 0 },
        ].map(({ name, max, min, labelName }) => {
          const isBaseOffsetShow =
            !(name === "baseOffset" && config.surfaceLength == 0) ||
            !(name === "baseOffset" && config.surfaceWidth == 0);

          const isInactive =
            (name === "surfaceLength" && config.surfaceLength == 0) ||
            (name === "surfaceWidth" && config.surfaceWidth == 0);

          if (name === "lowest" || name === "highest") {
            max = config.surfaceHeight;
          }

          return (
            <div
              style={
                name === "baseOffset"
                  ? isBaseOffsetShow
                    ? {
                        opacity: 0,
                        maxHeight: 0,
                        overflow: "hidden",
                        transition:
                          "opacity 1s ease, max-height 0.5s ease 0.3s",
                      }
                    : {
                        opacity: 1,
                        maxHeight: "500px",
                        overflow: "hidden",
                        transition:
                          "opacity 1s ease 0.5s, max-height 2s ease 0.5s",
                      }
                  : undefined
              }
            >
              <label
              key={name}
                style={{
                ...(isInactive ? { color: "#ddd" } : {}),
                ...(name === "surfaceLength" || name === "lowest" ? { marginTop: "70px" } : {})
              }}
              >

                {labelName}:
              </label>
              <div className={Styles.inputsDiv}>
                <input
                  type="range"
                  name={name}
                  value={config[name]}
                  onChange={handleChange}
                  min={min}
                  max={max}
                  className={isInactive ? Styles.inactive : ""}
                />
                <input
                  type="number"
                  name={name}
                  value={config[name]}
                  onChange={handleChange}
                  min={min}
                  max={max}
                  style={
                    isInactive
                      ? {
                          color: '#ddd'
                        }
                      : {}
                  }
                />
              </div>
            </div>
          );
        })}
        <button
          style={
            config.pattern === "random"
              ? { opacity: 1, transition: "opacity 0.7s ease"}
              : { opacity: 0, transition: "opacity 0.7s ease"}
          }
          onClick={handleGenerate}
        >
          Generate
        </button>
        {/* {config.pattern === "random" ? : undefined} */}
      </div>

      <ObjFile config={config} />
    </div>
  );
}
