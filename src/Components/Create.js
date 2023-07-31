import React from 'react'
import { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { Link } from "react-router-dom"
<script src='https://unpkg.com/axios/dist/axios.min.js'></script>

function Create() { 
  const [title, setTitle] = useState("");
  const [opt1, setOpt1] = useState("");
  const [opt2, setOpt2] = useState("");

  const handleTitle = () => {
    setTitle(document.getElementById("title").value);
  }
  const handleChange = () => {
    console.log("input"); 
    setOpt1(document.getElementById("opt1").value);
    setOpt2(document.getElementById("opt2").value);
  }
  const handleSubmit=()=> {
    const min = 10000; // Minimum 5-digit number
    const max = 99999; // Maximum 5-digit number
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const uniquecode="#"+randomNumber.toString();

    const data = {
      ID:uniquecode,
      Title: title,
      Option1: opt1,
      Option2: opt2
    }
    console.log(data);
    axios.post('/create', {"data":data});
    
  }


return (
  <>
    <Header />
    <div className='container-fluid col-md-8 my-5'>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Title</span>
        <input type="text" id="title" class="form-control" placeholder="Type your question here" onChange={handleTitle} aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Option 1</span>
        <input type="text" id='opt1' class="form-control" placeholder="Option 1" onChange={handleChange} aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Option 2</span>
        <input type="text" id="opt2" class="form-control" placeholder="Option 2" onChange={handleChange} aria-label="Username" aria-describedby="basic-addon1" />
      </div>
    </div>
    <button type="button" class="btn btn-primary mx-5" onClick={handleSubmit}><Link to='/' style={{color:"yellow"}}>Submit</Link></button>
  </>
)
}

export default Create
{/* <button type="button" class="btn btn-dark" onClick={addOption}>Add Option</button> */}
{/* {val.map((i) => {
  return (
    <div key={i} className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">Option {number}</span>
      <input type="text" class="form-control" placeholder={placeholder} onChange={handleChange} aria-label="Username" aria-describedby="basic-addon1" />
    </div>
  )
})} */}