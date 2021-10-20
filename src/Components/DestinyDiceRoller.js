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
  const [filtered, setFiltered] = useState(false);
  const [filter, setFilter] = useState(0);
  const [filteredResult, setFilteredResult] = useState([]);

  return (
    <div>
      <h3>Destiny Dice Roller</h3>
      <p>
        Det här är en enkel tärningskast-simulator jag skapade för att förenkla
        vissa situationer i krigsspelet Warhammer: Age of Sigmar. Om du vill
        kolla igenom källkoden så kan du följa länken till mitt GitHub
        repository för den här hemsidan som du kommer åt via knappen "Denna
        e-Portfolio"
      </p>
      <TextField
        label="Number of Dice"
        type="number"
        onChange={(event) => setDiceNumber(event.target.valueAsNumber)}
      />
      <TextField
        label="Type of Dice"
        type="number"
        onChange={(event) => setDieType(event.target.valueAsNumber)}
      />
      <TextField
        label="Target Number"
        type="number"
        onChange={(event) => setTargetNumber(event.target.valueAsNumber)}
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
          setFiltered(false);
        }}
      >
        Roll Dice
      </Button>
      {hasResults && !filtered && (
        <div>
          <p>
            Result:{" "}
            {results.map((result) => {
              return result + ", ";
            })}
          </p>
          <p>Successes: {hits}</p>
          <p>Sum: {rolledSum}</p>
          <TextField
            label="Filter by"
            type="number"
            onChange={(event) => setFilter(event.target.valueAsNumber)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setFiltered(true);
              setFilteredResult(results.filter((die) => die === filter));
            }}
          >
            Filter Result
          </Button>
        </div>
      )}
      {hasResults && filtered && (
        <div>
          <p>
            Result:{" "}
            {filteredResult.map((result) => {
              return result + ", ";
            })}
          </p>
          <p>
            Number of {filter}: {filteredResult.length}
          </p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setFiltered(false);
            }}
          >
            Unfilter
          </Button>
        </div>
      )}
    </div>
  );
}
