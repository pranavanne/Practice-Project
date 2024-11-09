import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import { useState } from "react";

function App() {

  const [inputData, setInputData] = useState({initialInvestment: 10000, annualInvestment: 1200, expectedReturn: 6, duration: 10});

  const isInputValid = inputData.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
      setInputData((prevInputData) => {
          return {...prevInputData, [inputIdentifier]: +newValue};
      });
  }

  return (
    <>
      <Header></Header>
      <UserInput inputData={inputData} handleChange={handleChange}></UserInput>
      {isInputValid ? <Results inputData={inputData}></Results>: <p className="center">Please enter valid duration.</p>}
    </>
  )
}

export default App