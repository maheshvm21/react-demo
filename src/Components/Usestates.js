import React,{useState,useEffect} from 'react'

export default function Usestates() {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState('hi');
    const name=['hi','bye']
    const Name=['hey','oh']
    const namelist=name.map(names=><h1><i className="blue-text text-darken-2">{names}</i></h1>)
    const Names=Name.forEach(element => {
        <h2>{element}</h2>
        console.log('foreach');
    });
    useState(()=>{
        console.log('Api Hiting..');
    })
    useEffect(() => {
        // Update the document title using the browser API
        console.log('page reloading..git ')
        console.log('every time');
      });
      useEffect(() => {
        // Update the document title using the browser API
        console.log('when page reloading...');
      },[count]);
      useEffect(() => {
        // Update the document title using the browser API
        console.log('hii');
      },[]);
    return (
        <div>
            <p>{namelist}</p>
            <p>{Names}</p>
            <p>Your are clicked on {count} time this button</p>
            <button onClick={()=>setCount(count+1)} className="blue-text"> Push me</button>
            <br/>
            <button onClick={()=>setMsg(msg+'e')}> click me</button>
            
            
        </div>
    )
}
