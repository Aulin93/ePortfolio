import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { Stat } from "./Stat";

export function KeeperOfStats() {
  const [statName, setStatName] = useState("");
  const [statValue, setStatValue] = useState(0);
  const [trackedStats, setTrackedStats] = useState([]);

  return (
    <div>
      <h3>Keeper of Stats</h3>
      <p>
        Det här är en applikation jag utvecklade för att göra det lättare att
        hålla koll på alla olika poäng och diverse som spelare måste hålla koll
        på i krigsspelet Warhammer: Age of Sigmar. Om du vill kolla igenom
        källkoden så kan du följa länken till mitt GitHub repository för den här
        hemsidan som du kommer åt via knappen "Den Här e-Portfolion"
      </p>
      <TextField
        label="Stat Name"
        onChange={(event) => setStatName(event.target.value)}
      />
      <TextField
        label="Stat Value"
        type="number"
        onChange={(event) => setStatValue(event.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => {
          //trackedStats.push(<Stat name={statName} value={statValue}/>);
          setTrackedStats(
            trackedStats.concat([<Stat name={statName} value={statValue} />])
          );
        }}
      >
        Track New Stat
      </Button>
      {trackedStats}
    </div>
  );
}
