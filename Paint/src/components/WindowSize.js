import React, { useEffect, useState } from "react";

function useWindowSize(cb) {
        const [[windowWidth, windowHeight], setWindowSize] = useState([window.innerWidth, window.innerHeight])
        useEffect(() => {
         
          const handleResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight])
          }
          cb()
          window.addEventListener('resize', handleResize)
          return () => window.removeEventListener('resize', handleResize)
        }, [])

  return [windowWidth,windowHeight]

  
}

export default useWindowSize;
