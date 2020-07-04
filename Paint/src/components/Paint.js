import React, { useEffect, useState ,useRef,useCallback } from "react";
import randomColor from "randomcolor";
import Name from "./Name";
import ColorPicker from "./ColorPicker";
import Canvas from "./Canvas";
import useWindowSize from "./WindowSize";
import RefereshButton from "./RefereshButton";

function Paint() {
  const [colors, setColors] = useState([]);
  const [activeColor, setActiveColor] = useState(null);
  const [lineWidth,setLineWidth] = useState(3)
  const [visible, setVisible] = useState(false)
  let timeoutId= useRef();
  const [windowWidth, windowHeight] = useWindowSize(() => {
    setVisible(true)
    clearTimeout(timeoutId.current)
    timeoutId = setTimeout(() => setVisible(false), 500)
  });

 
  
  const getColors = useCallback(() => {
    console.log("getcolors called ")
      const baseColor = randomColor().slice(1);
      fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
        .then((res) => res.json())
        .then((res) => {
          setColors(res.colors.map((color) => color.hex.value));
          setActiveColor(res.colors[0].hex.value);
        })},
    [])
   


  useEffect(getColors, []);

const  headerRef=useRef({offsetHeight : 0})

  return (
    <div>

      <header ref ={headerRef} style={{ borderTop: `10px solid ${activeColor}` }}>
        <div className="app">
          <Name />
        </div>
        <div style={{ marginTop: 10 }}>
          <ColorPicker
            colors={colors}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
            setLineWidth={setLineWidth}
          />
          <RefereshButton cb={getColors} />
        </div>
      </header>
      { activeColor && (
        <Canvas
          lineWidth={lineWidth}
          color={activeColor}
          height={window.innerHeight - headerRef.current.offsetHeight}
        />
      )}
      <div className={`window-size ${visible ? "" : "hidden"}`}>
         	{windowWidth} x {windowHeight}
     </div>
    </div>
  );
}

export default Paint;
