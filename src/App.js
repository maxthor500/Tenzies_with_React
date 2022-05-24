import React from "react";
import Die from "./components/Die";
import {nanoid} from "nanoid";


function App() {
  //  Initialize the state by calling our `allNewDice` function
  const [dice, setDice] = React.useState(allNewDice())

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

  function rollDice() {
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
      <div className="dice-container">
        {diceElements}
      </div>
      {/* Roll Dice button */}
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  );
}


export default App;
