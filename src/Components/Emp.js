import React,{useState} from "react";

export default function Emp() {
    const [state , setState] = useState({
        email : "",
        esal : ""
    })
    //
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value,
          
        }))
        console.log(value);
    }
    // const {uname,esal}=state;
    // const onChange=(e)=>{
    //     setState({...state,[e.target.id]:e.target.value})
       
    // }
   
 return (
  <div>
   <div className="container" style={{marginTop:'200px'}}>
    <div className="row">
     <form>
         <label>Name</label>
      <input type="text" placeholder="Enter email"   id="email" value={state.email}  onChange={handleChange}></input>
      <label>Salary</label>
      <input type="text" placeholder="sal" id="esal" name="esal" value={state.esal} onChange={handleChange}></input>
      <button onClick={handleChange} className="blue-text"> Submit</button>
     </form>
    </div>
   </div>
  </div>
 );
}
