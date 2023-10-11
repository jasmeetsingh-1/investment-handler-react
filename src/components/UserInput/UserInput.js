import React, { useState } from "react";

function UserInput(props) {
  const initialState = {
    "current-savings": "",
    "yearly-contribution": "",
    "expected-return": "",
    duration: "",
  };

  const [userInput, setUserInput] = useState(initialState);

  function inputHandler(inputId, value) {
    // Convert value to an integer
    const intValue = parseInt(value, 10);
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputId]: intValue,
      };
    });
  }

  function inputValidation() {
    //we can directly use the userInput
    console.log(userInput["current-savings"]);
    console.log(userInput["yearly-contribution"]);
    console.log(userInput["expected-return"]);
    console.log(userInput.duration);
  }

  function submitHandler(event) {
    event.preventDefault();
    //here it must be checked
    inputValidation();
    props.onClickHandler(userInput);
  }

  function resetHandler() {
    setUserInput(initialState);
    props.onResetHandler();
  }
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings (₹)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput["current-savings"]}
            onChange={(event) => {
              inputHandler("current-savings", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings (₹)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
            onChange={(event) => {
              inputHandler("yearly-contribution", event.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput["expected-return"]}
            onChange={(event) => {
              inputHandler("expected-return", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput["duration"]}
            onChange={(event) => {
              inputHandler("duration", event.target.value);
            }}
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default UserInput;
