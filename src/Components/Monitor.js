import React from 'react'
import Header from './Header';

function Monitor() {
  return (
    <>
      <Header />
      <div className="container-fluid col-md-8 my-5">
        <div class="progress my-auto">
          <div class="progress-bar" role="progressbar" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">option 1</div>
        </div>
        <div class="progress my-auto">
          <div class="progress-bar" role="progressbar" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">option 2</div>
        </div>
      </div>
    </>

  )
}

export default Monitor