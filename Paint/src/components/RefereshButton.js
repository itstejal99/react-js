import React from 'react'

function RefereshButton({cb}) {
        console.log("refresh button called")
        return <button className="button-refresh-colors" onClick={cb}>&#8634;</button>
}

export default React.memo(RefereshButton)
