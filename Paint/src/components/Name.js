import React,{useState} from 'react'

function Name() {
    const [name,setName] = useState("")
	return (
        <div>
         <label className="header-name">
			<input
			value={name}
				onChange={(e) => setName(e.target.value)}
				onClick={(e) => e.target.setSelectionRange(0, e.target.value.length)}
				placeholder="Untitled"
			/>
		</label>   
        </div>
    )
}

export default React.memo(Name)
