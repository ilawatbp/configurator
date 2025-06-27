// LightComposition.jsx
import React, { useState } from 'react';
import Styles from "./LightComposition.module.css";
import ObjFile from "./ObjFile.jsx";

export default function LightComposition() {
  const [config, setConfig] = useState({
    rows: 5,
    cols: 4,
    pattern: 'flat',
    spacing: 20,
    surfaceHeight: 170,
    surfaceLength: 100,
    surfaceWidth: 100,
    baseOffset: 6,
    lowest: 20,
    highest: 150,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.panel}>
        <label>Pattern:
          <select name="pattern" value={config.pattern} onChange={handleChange}>
            {['flat', 'wave', 'ripple', 'diagonal', 'checkerboard', 'random', 'spiral', 'mirror', 'dome'].map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </label>

        {['rows', 'cols', 'spacing', 'surfaceLength', 'surfaceWidth', 'surfaceHeight', 'baseOffset', 'lowest', 'highest'].map((field) => (
          <label key={field}>
            {field}:
            <input
              type="number"
              name={field}
              value={config[field]}
              onChange={handleChange}
              min="0"
            />
          </label>
        ))}
      </div>

      <ObjFile config={config} />
    </div>
  );
}
