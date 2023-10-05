
import './App.css';
import ResultsTable from './components/ResultsTable/ResultsTable';
import Header from './components/header/Header';
import UserInput from './components/UserInput/UserInput';
import { useState } from 'react';


function App() {

  const [userInput,setUserInput] = useState()
    

  const calculateHandler = (userInput) =>{
    setUserInput(userInput)
  }
    const yearlyData = [];

    if(userInput){
      let currentSavings = parseFloat(userInput['current-savings'])
      const yearlyContribution = parseFloat(userInput['yearly-contribution'])
      const expectedReturn = parseFloat(userInput['expected-return']) / 100;
      const duration = parseFloat(userInput['duration'])
  
      for(let i = 0; i < duration; i++){
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings +=   yearlyContribution + yearlyInterest;
        yearlyData.push({
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        })
        console.log(currentSavings,yearlyContribution)
    }

   
    }
  
  return (
    <div>
    <Header/>
    <UserInput onCalculate = {calculateHandler}/>
    {!userInput && <p style = {{textAlign: 'center'}}> No investment calculated yet. </p>}
   {userInput && < ResultsTable data= { yearlyData }  initialInvestment={parseFloat(userInput['current-savings'])}/>}
    </div>
  )

}

export default App;
