import ResultsTable from "./components/ResultsTable/ResultsTable";
import UserInput from "./components/UserInput/UserInput";
import Header from "./components/Header/Header";

import React, { useState, useEffect } from "react";

function App() {
  const [investment, setInvestment] = useState(0);
  const [userInput, setUserInput] = useState(null);
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
    setInvestment(userInput["current-savings"]);
    setUserInput(userInput);
  };

  useEffect(() => {
    if (userInput) {
      let currentSavings = userInput["current-savings"];
      const yearlyContribution = userInput["yearly-contribution"];
      const expectedReturn = userInput["expected-return"] / 100;
      const duration = userInput["duration"];
      const resultsData = [];
      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        resultsData.push({
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }
      setYearlyData(resultsData);
    } else {
      setYearlyData([]);
    }
  }, [userInput]);

  function resetResults() {
    setYearlyData([]);
  }

  return (
    <React.Fragment>
      <Header />
      <UserInput
        onClickHandler={calculateHandler}
        onResetHandler={resetResults}
      />

      {yearlyData.length > 0 ? (
        <ResultsTable yearData={yearlyData} initialInvestment={investment} />
      ) : (
        <p className="doing-center">No investment calculated yet.</p>
      )}
    </React.Fragment>
  );
}

export default App;
