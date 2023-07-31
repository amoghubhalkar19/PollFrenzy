import React, { useState } from 'react'
import Header from './Header';
import axios from 'axios';
<script src='https://unpkg.com/axios/dist/axios.min.js'></script>

function Vote() {
  const [voteid, setvoteid] = useState("");

  const handleSearch=()=>{
    setvoteid(document.getElementById("voteid").value);
    console.log("Searching...");
    console.log(voteid);
   const  voteData={
        id:voteid
    }

    axios.post('/vote', {voteData});
  }

  return (
    <>
      <Header />
      <div className='container-fluid'>
        <div class="input-group mb-3">
          <input type="text" id='voteid' class="form-control" placeholder="Enter unique id" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <button type="button" onClick={handleSearch} class="btn btn-primary">Vote Now</button>
      </div>
    </>
  )
}

export default Vote