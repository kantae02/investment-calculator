import './UserInput.css'
import {useState} from 'react'



const UserInput = (props) => {

    const initialInputValues = {
        'current-savings': 10000,
    'yearly-contribution' : 1200,
    'expected-return' : 7,
     'duration' : 10 
    }
     
   const [userInput,setUserInput] = useState(initialInputValues)

    const submitHandler = (e) => {
        e.preventDefault();
        props.onCalculate(userInput)
    }
    const resetHandler = () => {
        console.log('reset')
        setUserInput(initialInputValues)
        

    }
    const inputChangeHandler = (input, value) => {
     console.log(input,value)
     setUserInput((prevInput)=>{
        return{
            ...prevInput,
            [input]: value
        }
     })
    }

    return (
        <form onSubmit={submitHandler} className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings (INR)</label>
                    <input
                     onChange={(e) => inputChangeHandler('current-savings', e.target.value)}
                     value = {userInput['current-savings']}
                     type="number" 
                      id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings (INR)</label>
                    <input 
                    onChange={(e) => inputChangeHandler('yearly-contribution', e.target.value)}
                    value = {userInput['yearly-contribution']}
                    type="number" id="yearly-contribution" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                     onChange={(e) => inputChangeHandler('expected-return', e.target.value)}
                     value = {userInput['expected-return']}
                   type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input
                    onChange={(e) => inputChangeHandler('duration', e.target.value)}
                    value = {userInput['duration']}
                    type="number" id="duration" />
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

    )
}

export default UserInput