import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export function Summary({ currentPlanChose }) {

    return (  
        <>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div className="summary-box">
            <div className="summary-title">
                <h3>{currentPlanChose.optionTitle} Plan.</h3> 
            </div>
            <div className="summary-price">
                ${currentPlanChose.optionPrice}
            </div>
        </div>
          <div id="back-sub-sec">
          <input type="submit" onClick={()=>{
            alert("Thank you for your attention ")
          }} value="Confirm" />
          <Link to={"/step2"}>Go Back</Link>
          </div>
      </>
    );
}

