import React from "react";
import Die from "./components/Die"


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
      //push a random number from 1 to 6 in to the array
      const randomNumber = Math.ceil(Math.random() * 6);
      diceValues.push(randomNumber)
    }
    return diceValues
  }

  /**
   * Map over the state numbers array to generate our array
   * of Die elements and render those in place of our
   * manually-written 10 Die elements.
   */
  const diceElements = dice.map(die => <Die value={die} />)

  return (
    <main className="game-board">
      <div className="dice-container">
        {diceElements}
      </div>
    </main>
  );
}


export default App;
