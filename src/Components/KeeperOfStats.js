import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { LordOfChange } from "./LordOfChange";
import { MegaBossOnMawKrusha } from "./MegaBossOnMawKrusha";
import { Stat } from "./Stat";

export function KeeperOfStats() {
  const [statName, setStatName] = useState("");
  const [statValue, setStatValue] = useState(0);
  const [trackedStats, setTrackedStats] = useState([]);
  const [selectedMonster, setSelectedMonster] = useState("Lord of Change");

  return (
    <div>
      <h3>Keeper of Stats</h3>
      <p>
        Det här är en applikation jag utvecklade för att göra det lättare att
        hålla koll på alla olika poäng och diverse som spelare måste hålla koll
        på i krigsspelet Warhammer: Age of Sigmar. Om du vill kolla igenom
        källkoden så kan du följa länken till mitt GitHub repository för den här
        hemsidan som du kommer åt via knappen "Denna e-Portfolio"
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
          setTrackedStats(
            trackedStats.concat([<Stat name={statName} value={statValue -0} />])
          );
        }}
      >
        Track New Stat
      </Button>
      <select onChange={(event) => setSelectedMonster(event.target.value)}>
        <option value="Lord of Change">Lord of Change</option>
        <option value="Megaboss on Maw-Krusha">Megaboss on Maw-Krusha</option>
      </select>
      <Button
        variant="contained"
        onClick={() => {
          switch (selectedMonster) {
            case "Lord of Change":
              setTrackedStats(trackedStats.concat([<LordOfChange />]));
              break;
            case "Megaboss on Maw-Krusha":
              setTrackedStats(trackedStats.concat([<MegaBossOnMawKrusha />]));
              break;
            default:
              break;
          }
        }}
      >
        Track Monster
      </Button>
      {trackedStats}
    </div>
  );
}
