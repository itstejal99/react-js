import React from "react";

function ColorPicker({ colors = [], activeColor, setActiveColor ,setLineWidth }) {
  return (
    <div>
      <div>Inside the color picker</div>
     < fieldset className="color-picker">
      {colors.map((color, i) => (
        <label key={i}>
          <input
            name="color"
            type="radio"
            value={color}
            checked={activeColor === color}
            onChange={() => setActiveColor(color)}
          />
          <span style={{ background: color }} />
        </label>
      ))}
       <div >
           <button onClick={() => setLineWidth(count => count +1 )}  >+</button>
           <button onClick={() => setLineWidth(count => count -1 )}  >-</button>
     </div>
      </ fieldset>
     
    </div>

  );
}

export default ColorPicker;
