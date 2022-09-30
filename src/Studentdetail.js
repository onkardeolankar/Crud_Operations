import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

let initialValue={
  name:"",
  email:"",
  number:"",
  batch:"",
  course:""
}
export default function Studentdetail() {
    const [studentData,setstudentData]=useState(initialValue);

    const navigate = useNavigate();
    
      const handleChange = (e) => {
        setstudentData({ ...studentData, [e.target.name]: e.target.value});
      };

      const handleSubmit=()=>{
        axios
        .post(
          "https://62dc38374438813a26136205.mockapi.io/data",
          JSON.stringify(studentData),
          {
            headers: {
              "Content-type": "application/json"
       }})
        .then(() => setstudentData(initialValue));
      }; 
      const next=() => {navigate("/")};

  return (<>
  <h1 id='portal'>Student Admission Form</h1>
  <div class="mb-3" id='portall'>
  <label for="name" class="form-label">Name:</label>
  <input 
  type="text" 
  onChange={handleChange}
  class="form-control" 
  name='name'
  placeholder="Enter you name"/>
  <hr/>

  <label for="email" class="form-label">Email:</label>
  <input 
  type="email" 
  onChange={handleChange}
  class="form-control" 
  name='email'
  placeholder="Enter you email"/>
  <hr/>

  <label for="number" class="form-label">Number:</label>
  <input 
  type="number" 
  onChange={handleChange}
  class="form-control" 
  name='number'
  placeholder="Enter you number"/>
  <hr/>

  <label for="batch" class="form-label">Batch:</label>
  <input 
  type="text" 
  onChange={handleChange}
  class="form-control" 
  name='batch'
  placeholder="Enter you batch"/>
  <hr/>

  <label for="course" class="form-label">Course:</label>
  <input 
  type="text" 
  class="form-control" 
  onChange={handleChange}
  name='course'
  placeholder="Enter you course"/>
  <hr/>

  <button 
  type="button" 
  onClick={()=>{handleSubmit();next();}}
  class="btn btn-success">
  Submit
  </button>
</div>
</>
  )
}
