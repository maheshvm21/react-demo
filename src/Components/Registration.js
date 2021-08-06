import React from "react";

export default function Registration() {


    
 return (
  <div>
   <h3 >Sign Up</h3>
   <div className="container-fluid">
    <div className="row">
     <div className="card col s6 offset-s3">
      <div className="form-grop">
       <label htmlFor="First Name">First Name</label>
       <input
        id="First Name"
        type="text"
        className="form-control"
        placeholder="Please Enter First Name"
       ></input>
      </div>
      <div className="form-grop">
       <label>Last Name</label>
       <input
        type="text"
        className="form-control"
        placeholder="Please Enter Last Name"
       ></input>
      </div>
      <div className="form-group">
       <label>Email address</label>
       <input type="email" className="form-control" placeholder="Enter email" />
      </div>
      <div className="form-group">
       <label>Password</label>
       <input
        type="password"
        className="form-control"
        placeholder="Enter password"
       />
      </div>

      
      <div className="form-group">
       <label>Gender</label>
       <p style={{ marginRight: "502px" }}>
        <label>
         <input name="group1" className="with-gap" type="radio" />
         <span>Male</span>
        </label>
        <label>
         <input name="group1" type="radio" />
         <span>Female</span>
        </label>
       </p>
      </div>
      <div className="form-group">
       <label>Select Favourite</label>
      <p style={{ marginRight: "565px" }}> 
      <label>
        <input id="indeterminate-checkbox" type="checkbox" />
        <span>Frontend</span>
      </label>
      </p>
      <p style={{ marginRight: "565px" }}>
      <label>
        <input id="indeterminate-checkbox" type="checkbox" />
        <span>Backend</span>
      </label>
      </p>
      <p style={{ marginRight: "565px" }}>
      <label>
        <input id="indeterminate-checkbox" type="checkbox" />
        <span>FullStack</span>
      </label>
      </p>
      <p style={{ marginRight: "570px" }}>
      <label>
        <input id="indeterminate-checkbox" type="checkbox" />
        <span>Design</span>
      </label>
      </p>
    </div>
    {/* drop dwon */}
    <div className="form-group">

</div>
<div className="form-group">
       <label>Addres</label>
       <select className="browser-default">
           <option id='1'>Select</option>
           <option id='1'>Hyderabad</option>
           <option id='1'>secunderabd</option>
           <option id='1'>Hyderabad</option>
           <option id='1'>secunderabd</option>
       </select>
       </div>
      
  {/*  */}
 
    <button className="btn waves-effect waves-light" type="submit" name="action" style={{ marginTop: "180px" }}>Submit
    <i className="material-icons right">send</i>
  </button>
      <p className="forgot-password text-right">
       Already registered <a href="#">sign in?</a>
      </p>
     </div>
    </div>
   </div>
  </div>
 );
}
