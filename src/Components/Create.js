import React from 'react'
import { useState } from 'react';
import Header from './Header';
import fs from 'fs';
import data from './data.json';

function Create() {
  var num;
  const [placeholder, setPlaceholder] = useState("option");
  const [val, setVal] = useState([]);
  const [title, setTitle] = useState("");
  const [opt1, setOpt1] = useState("");
  const [opt2, setOpt2] = useState("");
  // const [number, setNumber] = useState(3);
  // const addOption = () => {
  //   setVal([...val, []]);
  //   setPlaceholder("Option ", number);
  //   num = number;
  //   setNumber(num);
  //   num = num + 1;
  // }

  const handleTitle = () => {
    setTitle(document.getElementById("title").value);
    // setdata(...data, title);
  }
  const handleChange = () => {
    console.log("input");
    let a = JSON.stringify(data);
    let b= JSON.parse(a);
    // fs.readFile('./data.json', {encoding:'utf-8'}, (err, jsonString)=>{
    //   let abc= JSON.stringify(jsonString);
    //   let bc=JSON.parse(abc);
    //   console.log(abc);
      fs.writeFile('./data.json', b);
    // })
    
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
  </>
)
}

export default Create
{/* <button type="button" class="btn btn-dark" onClick={addOption}>Add Option</button> */}
{/* <button type="button" class="btn btn-primary mx-5" onClick={handleSubmit}>Submit</button> */}
{/* {val.map((i) => {
  return (
    <div key={i} className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">Option {number}</span>
      <input type="text" class="form-control" placeholder={placeholder} onChange={handleChange} aria-label="Username" aria-describedby="basic-addon1" />
    </div>
  )
})} */}