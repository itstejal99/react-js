import React,{ useState ,useEffect,useRef,useCallback,useMemo} from "react";
import randomColor from "randomcolor";


function  Playground() {

    const [count, increment] = useState(0);
    const inputRef=useRef()

    const [color, setColor] = useState(null);


  
   useEffect(() => {
       setColor(randomColor())
       inputRef.current.focus()
    	}, [count]);
   

  return (
    <div>
      <>Welcome to my ! first Project</>

      <div>        
      <div>Count value is {count}</div>
        <div style={{ borderTop: `10px solid ${color}` }}>
			{count} 
      </div>
              <button onClick={() => increment( current => current+1)}>+</button>
              <button onClick={() => increment( current => current-1)}>-</button>
              <hr/>
              <input ref={inputRef} type="range" onChange={e => increment(e.target.value)} value={count} />
           
      </div>
    </div>
  );
}

export default Playground;
