import React from "react";
import Die from "./components/Die";
import {nanoid} from "nanoid";


function App() {
  //  Initialize the state by calling our `allNewDice` function
  const [dice, setDice] = React.useState(allNewDice())

  /**
   * Write a function (allNewDice) that returns an array 
   * of 10 random numbers between 1-6 inclusive.
   */
  function allNewDice() {
    // new array
    const diceValues = []

    //loop 10 times
    for(let i=0; i<10; i++) {
      // generate a random number from 1 to 6
      const randomNumber = Math.ceil(Math.random() * 6);
      // generate an Dice object
      const diceObject = {
        value: randomNumber, 
        isHeld: false,
        id: nanoid(),
      }
      // push the object in the array
      diceValues.push(diceObject)
    }
    return diceValues
  }

  function rollDice() {
    setDice(allNewDice)
  }

  /**
   * Map over the state numbers array to generate our array
   * of Die elements and render those in place of our
   * manually-written 10 Die elements.
   */
  const diceElements = dice.map(die => <Die key={die.id} value={die.value} />)

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
