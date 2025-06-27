// src/components/ConfiguratorPanel.jsx
import React from 'react';

const ConfiguratorPanel = ({ values, setValues, generateGrid }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: +value }));
  };

  return (
    <div style={panelStyle}>
      <label>
        Pattern:
        <select
          name="pattern"
          value={values.pattern}
          onChange={handleChange}
          style={selectStyle}
        >
          {['flat', 'wave', 'ripple', 'diagonal', 'checkerboard', 'random', 'spiral', 'mirror', 'dome'].map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </label>

      {['rows', 'cols', 'spacing', 'surfaceLength', 'surfaceWidth', 'surfaceHeight', 'baseOffset', 'lowest', 'highest'].map(field => (
        <label key={field}>
          {field}:
          <input
            type="number"
            name={field}
            value={values[field]}
            onChange={handleChange}
          />
        </label>
      ))}

      <button onClick={generateGrid}>Generate</button>
    </div>
  );
};

const panelStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: 250,
  background: 'rgba(255,255,255,0.9)',
  padding: 10,
  zIndex: 10,
};

const selectStyle = {
  width: '100%',
  height: 30,
  marginTop: 5,
  marginBottom: 10,
};

export default ConfiguratorPanel;
