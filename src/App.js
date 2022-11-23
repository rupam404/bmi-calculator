import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(" ");
  const [height, setHeight] = useState(" ");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
 

  let calcBmi = (event) => {
   
    event.preventDefault();

    if (weight === 0 || height === 0 || weight<0 || height<0) {
      alert("Please enter a valid inputs");
      window.location.reload();
    } else {
      let bmi = (weight / ((height/100) * (height/100)));
      setBmi(bmi.toFixed(1));

    

      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You are a healthy weight");
      } else if (bmi >= 25 && bmi < 30){
        setMessage("You are overweight");
      }
      else{
        setMessage("You are obese")
      }
    }

 

  };

  //  show image based on bmi calculation
  

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label className="label">Weight (kg) :</label>
            <input className="input" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label className="label">Height (cm) :</label>
            <input className="input"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div id="buttons">
            <button className="btn-button" type="submit" >
              Calculate
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
           
          </div>

          <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
        </form>

       

      
      </div>
    </div>
  );
}

export default App;
