import React, { useRef, useEffect } from "react";

const Baseplate2D = ({ stringHeights, surface }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !surface) return;
    const ctx = canvas.getContext("2d");

    const { width, length, baseOffset} = surface;
    
    const rwidth = length;
    const rlength = width;

    canvas.width = rwidth;
    canvas.height = rlength;
    console.log (`rwidth: ${rwidth}, rlength: ${rlength}`)

    // Clear and fill background
    ctx.clearRect(0, 0, rwidth, rlength);
    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, rwidth, rlength);

    // Draw holes
    ctx.fillStyle = "#000";
    ctx.font = "10px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const maxCol = Math.max(...stringHeights.map(s => s.col), 1)+1;
    const maxRow = Math.max(...stringHeights.map(s => s.row), 1)+1;
    stringHeights.forEach((s) => {
      
      const xoffset =(rwidth-((maxCol-1) * (rwidth / maxCol)))/2;
      const yoffset =(rlength-((maxRow-1) * (rlength / maxRow)))/2;
      
      const x = (s.col * (rwidth / maxCol))+ xoffset;
      const y = (s.row * (rlength / maxRow))+ yoffset;
      console.log(xoffset+','+maxCol+ 'x: '+ (s.col+1) + 'x' + (rwidth / maxCol) +"="+ x)
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillText(`${s.row}-${s.col}`, x, y - 10);
    });
  }, [stringHeights, surface]);

  return (
    <div style={{ padding: "20px" }}>
      <h3>Baseplate Hole Layout</h3>
      <canvas ref={canvasRef} style={{ border: "1px solid #333" }} />
    </div>
  );
};

export default Baseplate2D;
