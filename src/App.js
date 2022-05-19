import Die from "./components/Die"


function App() {

  /**
   * Challenge 2:
   * 
   * Write a function (allNewDice) that returns an array 
   * of 10 random numbers between 1-6 inclusive.
   * 
   * Log the array of numbers to the console for now
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

  console.log(allNewDice())

  return (
    <main className="game-board">
      <div className="dice-container">
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
      </div>
    </main>
  );
}


export default App;
