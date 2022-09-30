import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { FaPen, FaTrashAlt } from "react-icons/fa";


function App() {
  const navigate = useNavigate();
  const[student,setStudent]=useState([]);

  const getData = () => {
    fetch("https://62dc38374438813a26136205.mockapi.io/data")
      .then((response) => response.json())
      .then((data) => setStudent(data));
  };

  const handleDelete = (id)=>{
    axios.delete('https://62dc38374438813a26136205.mockapi.io/data/'+id)
    .then((data)=>getData());
  }

 
  useEffect(()=>{
    getData();
  },[]);

  return (<>
  <table className="table caption-top">
  <caption id='mainlist'><strong>List of student</strong></caption>
  <thead>
    <tr style={{fontSize:'x-large',border:'3px solid black'}}>
      <th scope="col">Sr.no</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Number</th>
      <th scope="col">Batch</th>
      <th scope="col">Course</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {student.map((value,index)=>{
      return <tr key={value.id}>
        <td>{index+1}</td>
        <td>{value.name}</td>
        <td>{value.email}</td>
        <td>{value.number}</td>
        <td>{value.batch}</td>
        <td>{value.course}</td>
        <td>
          <button type="button" className="btn btn-primary" onClick={() => navigate("/edit/"+value.id)}><FaPen/></button>
        <button type="button" className="btn btn-danger" onClick={()=> handleDelete(value.id)}><FaTrashAlt/></button>
        </td>
      </tr>
    })}
  </tbody>
  </table>
  <button onClick={() => navigate("/add")}>create student</button>

    </>
  );
}

export default App;
