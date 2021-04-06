import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

export function DestinyDiceRoller() {
  const [results, setResults] = useState([]);
  const [diceNumber, setDiceNumber] = useState(0);
  const [dieType, setDieType] = useState(0);
  const [targetNumnber, setTargetNumber] = useState(0);
  const [rolledSum, setRolledSum] = useState(0);
  const [hits, setHits] = useState(0);
  const [hasResults, setHasResults] = useState(false);

  return (
    <div>
      <h3>Destiny Dice Roller</h3>
      <p>
        Det här är en enkel tärningskast-simulator jag skapade för att förenkla
        vissa situationer i krigsspelet Warhammer: Age of Sigmar. Om du vill
        kolla igenom källkoden så kan du följa länken till mitt GitHub
        repository för den här hemsidan som du kommer åt via knappen "Den Här
        e-Portfolion"
      </p>
      <TextField
        label="Number of Dice"
        type="number"
        onChange={(event) => setDiceNumber(event.target.value)}
      />
      <TextField
        label="Type of Dice"
        type="number"
        onChange={(event) => setDieType(event.target.value)}
      />
      <TextField
        label="Target Number"
        type="number"
        onChange={(event) => setTargetNumber(event.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => {
          let sum = 0;
          let successes = 0;
          let diceResults = [];
          for (let index = 0; index < diceNumber; index++) {
            let result = Math.floor(Math.random() * dieType + 1);
            diceResults.push(result);
            sum += result;
            if (result >= targetNumnber) {
              successes++;
            }
          }
          diceResults.sort((a, b) => b - a);
          setResults(diceResults);
          setRolledSum(sum);
          setHits(successes);
          setHasResults(true);
        }}
      >
        Roll Dice
      </Button>
      {hasResults && (
        <div>
          <p>
            Result:{" "}
            {results.map((result) => {
              return result + ", ";
            })}
          </p>
          <p>Successes: {hits}</p>
          <p>Sum: {rolledSum}</p>
        </div>
      )}
    </div>
  );
}
