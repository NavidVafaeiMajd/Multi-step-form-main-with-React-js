import { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { YourInfo } from "./components/YourInfo";
import { SelectPlan } from "./components/SelectPlan";
import iconarcade from "./assets/images/icon-arcade.svg";
import iconadvanced from "./assets/images/icon-advanced.svg";
import iconpro from "./assets/images/icon-pro.svg";
import { Summary } from "./components/Summary";



function App() {
  //data of 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  //for each state of plan option
  const [selectedOption, setSelectedOption] = useState('option1');
  const [optionPrice, setOptionPrice] = useState({optionPrice1:9,optionPrice2:12,optionPrice3:15});
  const [optionPlan, setOptionPlan] = useState('/mo');
  
  const options = [
      { id: 'option1', image:iconarcade, optionTitle: 'Arcade' , optionPrice:optionPrice.optionPrice1 },
      { id: 'option2', image:iconadvanced, optionTitle: 'Advanced' , optionPrice:optionPrice.optionPrice2 },
      { id: 'option3', image:iconpro, optionTitle: 'Pro' , optionPrice:optionPrice.optionPrice3 } ,
  ];

  //for toggle of mounlly or yearly
  const [toggleSliderChecked, setToggleSliderChecked] = useState(false);
  
  const handleToggleSliderChecked = () => {
    setToggleSliderChecked(!toggleSliderChecked);
    if(toggleSliderChecked === false){

      setOptionPrice({optionPrice1:90,optionPrice2:120,optionPrice3:150})
      setOptionPlan("/yr")
    }else{
      setOptionPrice({optionPrice1:9,optionPrice2:12,optionPrice3:15})
      setOptionPlan("/mo")

    }
  };

  ///////////////
  const [currentPlanChose, setCurrentPlanChose] = useState({
    optionTitle: "Acard",
    optionPrice: 9
  });


  return (
    <>
    <div id="main-content">
      <div id="main-content-box">
        <div id="main-content-left-side">
          <div id="main-content-left-side-steps" >
            <div  className=" main-content-left-side-steps-counter active">
              <span>

                1
              </span>
            </div>
            <div>
              <span id="main-content-left-side-steps-name">
                step 1
              </span>
              <span id="main-content-left-side-steps-title">
                your info
              </span>
            </div>
          </div>
          <div id="main-content-left-side-steps" >
            <div  className=" main-content-left-side-steps-counter ">
              <span>

                2
              </span>
            </div>
            <div>
              <span id="main-content-left-side-steps-name">
                step 2
              </span>
              <span id="main-content-left-side-steps-title">
                select plan
              </span>
            </div>
          </div>

          <div id="main-content-left-side-steps" >
            <div  className=" main-content-left-side-steps-counter ">
              <span>

                3
              </span>
            </div>
            <div>
              <span id="main-content-left-side-steps-name">
                step 3
              </span>
              <span id="main-content-left-side-steps-title">
                summary
              </span>
            </div>
          </div>
        </div>
        <div id="main-content-right-side">
          <Router>
            <Routes>
              <Route exact path="/" element={<YourInfo formData={formData} setFormData={setFormData}/>} />
              <Route path="/step2" element={<SelectPlan setCurrentPlanChose={setCurrentPlanChose} currentPlanChose={currentPlanChose} handleToggleSliderChecked={handleToggleSliderChecked} setSelectedOption={setSelectedOption} selectedOption={selectedOption} optionPrice={optionPrice} optionPlan={optionPlan} toggleSliderChecked={toggleSliderChecked} options={options}/>} />
              <Route path="/step3" element={<Summary currentPlanChose={currentPlanChose}/>} />

            </Routes>
          </Router>

        </div>
      </div>
    </div>
    </>
  );
}

export default App;
