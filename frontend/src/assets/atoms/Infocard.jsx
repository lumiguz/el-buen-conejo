import React from "react"
import "../atoms/infocard.css"

const Infocard = () =>{
    return <> 
        <div>
<div className="card rounded-4 shadow p-1" id="cardinfo">
  <div className="card-body" id="name">
        [Name]
    <h6 id="parents">
        Padre
    </h6>
  </div>
</div>
        </div>
    </>
}

export default Infocard