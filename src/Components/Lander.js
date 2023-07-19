import React from 'react'
import Header from './Header';
function Lander() {
    return (
       <>
       <Header/>
        <div className="conatiner-fluid" id='lander'>
            <div class="container" style={{height: "80vh"}}>
                <div class="row" >
                    <div class="col col-md-4 text-center align-items-center d-flex" style={{height: "80vh"}}>
                        <button type="button" class="btn btn-success mx-auto">Create a Poll</button>
                    </div>
                    <div class="col col-md-4 text-center align-items-center d-flex" style={{height: "80vh"}}>
                        <button type="button" class="btn btn-primary mx-auto">Monitor a Poll</button>
                    </div>
                    <div class="col col-md-4 text-center align-items-center d-flex" style={{height: "80vh"}}>
                        <button type="button" class="btn btn-warning mx-auto">Vote Now</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Lander