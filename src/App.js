import React, {useEffect} from "react";
import Die from "./components/Die";
import {nanoid} from "nanoid";
import Confetti from 'react-confetti'


function App() {
  //  Initialize the state by calling our `allNewDice` function
  const [dice, setDice] = React.useState(allNewDice())

  const [tenzies, setTenzies] = React.useState(false)

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6), 
      isHeld: false,
      id: nanoid(),
    }
  }

  /**
   * Write a function (allNewDice) that returns an array 
   * of 10 random numbers between 1-6 inclusive.
   */
  function allNewDice() {
    // new array
    const diceValues = []

    //loop 10 times
    for(let i=0; i<10; i++) {
      // push the new die in the array
      diceValues.push(generateNewDie())
    }
    return diceValues
  }

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("You won!")
    }
  }, [dice]);

  function rollDice() {
    if (tenzies) {
      for(let i=0; i<dice.length; i++) {
        holdDice(dice[i].id)
        setTenzies(false)
      }
    }
    setDice(prevDice => prevDice.map(die => {
        return die.isHeld ? die : generateNewDie()
      })
    )
  }

  function holdDice(id) {
    // change the value of die.isHeld when the die is clicked
    setDice(prevDice => {
      return prevDice.map((die) => {
        return die.id === id ? {
          ...die, 
          isHeld: !die.isHeld} : die
      })}
    )
  }
  
  /**
   * Map over the state numbers array to generate our array
   * of Die elements and render those in place of our
   * manually-written 10 Die elements.
   */
  const diceElements = dice.map(die => 
    <Die  key={die.id} value={die.value} 
          isHeld={die.isHeld} id={die.id} 
          holdDice={()=>holdDice(die.id)} />)

  return (
    <main className="game-board">
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. 
        Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      {/* Roll Dice button */}
      <button className="roll-dice" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
    </main>
  );
}


export default App;
