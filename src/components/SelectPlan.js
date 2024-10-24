
import { useState } from "react";
import iconarcade from "../assets/images/icon-arcade.svg";
import iconadvanced from "../assets/images/icon-advanced.svg";
import iconpro from "../assets/images/icon-pro.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function  SelectPlan({currentPlanChose,setCurrentPlanChose,handleToggleSliderChecked,setSelectedOption,options,selectedOption , optionPlan, toggleSliderChecked}) {

  const navigate = useNavigate();
    return (  
        <>
        <h1>Select your plan</h1>
        <p> You have the option of monthly or yearly billing.</p>
        <form onSubmit={(e)=>{
          e.preventDefault();
          navigate("/step3")
        }}>
          <div id="radio-plan">
          {options.map(option => (
                <label key={option.id} className={`radio-container ${selectedOption === option.id ? 'active' : ''}`}>
                    <input
                        type="radio"
                        required
                        name="options"
                        value={option.id}
                        checked={selectedOption === option.id}
                        onChange={() => {
                          setSelectedOption(option.id);
                          setCurrentPlanChose({optionTitle: option.optionTitle,optionPrice : option.optionPrice})
                        }}
                    />
                    <img
                        className="checkmark"
                        src={option.image}
                        alt={option.description}
                        width="50px"
                    />
                    <div className="description">
                    <h3>{option.optionTitle}</h3>
                    <span>${option.optionPrice}{optionPlan}</span>
                      </div>
                </label>
            ))}

          </div>
          <div className="toggle-slider-box">
            <h3>Monthly</h3>
            <div className="toggle-slider">
                <input
                  type="checkbox"
                  id="toggle"
                  checked={toggleSliderChecked}
                  onChange={handleToggleSliderChecked}
                />
                <label htmlFor="toggle" className="slider" />
            </div>
            <h3>Yearly</h3>
          </div>
          <div id="back-sub-sec">
            <input type="submit" value="Next Step" />
            <Link to={"/"}>Go Back</Link>
          </div>
        </form>
      </>
    );
}

