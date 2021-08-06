import React,{useState} from 'react'

const Myown = () => {
    const [name, setName] = useState("");
    return (
        <>
        <form>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <button type="submit">submit</button>
        </form>
    </>
    )
}

export default Myown
