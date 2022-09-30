import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

let initialValue={
  name:"",
  email:"",
  number:"",
  batch:"",
  course:""
}
export default function Editdetail() {
    const {id}= useParams();
    console.log(id);
    const [studentData,setstudentData]=useState(initialValue);
      const handleChange = (e) => {
        setstudentData({ ...studentData, [e.target.name]: e.target.value});
      };

        const getdata=()=>{
        fetch('https://62dc38374438813a26136205.mockapi.io/data/'+id).then((responce)=>responce.json())
        .then((data)=>{setstudentData(data);console.log(data)});
        };
        useEffect(()=>{
          getdata();
        },[])
     

      const handleSubmit=()=>{
        if(id){
            axios
            .put('https://62dc38374438813a26136205.mockapi.io/data/'+id,
              JSON.stringify(studentData),
              {
                headers: {
                  "Content-type": "application/json"
                }})
            .then(() => setstudentData(initialValue));
          }else{
            axios
            .post("https://62dc38374438813a26136205.mockapi.io/data/"+id,
              JSON.stringify(studentData),
              {
                headers: {
                  "Content-type": "application/json"
                }})
            .then(() => setstudentData(initialValue));
          }
        }
 
  return (<>
  <h1 id='portal'>Edit Admission Form</h1>
  <div class="mb-3" id='portall'>
  <label for="name" class="form-label">Name:</label>
  <input 
  value={studentData.name}
  type="text" 
  onChange={handleChange}
  class="form-control" 
  name='name'
  placeholder="Enter you name"/>
  <hr/>

  <label for="email" class="form-label">Email:</label>
  <input 
  value={studentData.email}
  type="email" 
  onChange={handleChange}
  class="form-control" 
  name='email'
  placeholder="Enter you email"/>
  <hr/>

  <label for="number" class="form-label">Number:</label>
  <input 
  value={studentData.number}
  type="number" 
  onChange={handleChange}
  class="form-control" 
  name='number'
  placeholder="Enter you number"/>
  <hr/>

  <label for="batch" class="form-label">Batch:</label>
  <input 
  value={studentData.batch}
  type="text" 
  onChange={handleChange}
  class="form-control" 
  name='batch'
  placeholder="Enter you batch"/>
  <hr/>

  <label for="course" class="form-label">Course:</label>
  <input 
  value={studentData.course}
  type="text" 
  class="form-control" 
  onChange={handleChange}
  name='course'
  placeholder="Enter you course"/>
  <hr/>
  <button 
  type="button" 
  onClick={handleSubmit}
  class="btn btn-success">
  Submit
  </button>
</div>
</>
  )
}