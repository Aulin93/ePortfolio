import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { KairosFateweaver } from "./KairosFateweaver";
import { LordOfChange } from "./LordOfChange";
import { MegaBossOnMawKrusha } from "./MegaBossOnMawKrusha";
import { Stat } from "./Stat";
import { Thanquol } from "./Thanquol";
import { VerminlordCorruptor } from "./VerminlordCorruptor";
import { VerminlordWarpseer } from "./VerminlordWarpseer";

export function KeeperOfStats() {
  const [statName, setStatName] = useState("");
  const [statValue, setStatValue] = useState(0);
  const [trackedStats, setTrackedStats] = useState([]);
  const [selectedMonster, setSelectedMonster] = useState("Lord of Change");
  const [keyIDNumber, setKeyIDNumber] = useState(0);


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
        onChange={(event) => setStatValue(event.target.valueAsNumber)}
      />
      <Button
        variant="contained"
        onClick={() => {
          setTrackedStats(
            trackedStats.concat([<Stat name={statName} value={statValue} key={"keyIDNumber: "+keyIDNumber}/>])
          );
          setKeyIDNumber(keyIDNumber + 1);
        }}
      >
        Track New Stat
      </Button>
      <select onChange={(event) => setSelectedMonster(event.target.value)}>
        <option value="Lord of Change">Lord of Change</option>
        <option value="Kairos Fateweaver">Kairos Fateweaver</option>
        <option value="Megaboss on Maw-Krusha">Megaboss on Maw-Krusha</option>
        <option value="Thanquol">Thanquol</option>
        <option value="Verminlord Warpseer">Verminlord Warpseer</option>
        <option value="Verminlord Corruptor">Verminlord Corruptor</option>
      </select>
      <Button
        variant="contained"
        onClick={() => {
          switch (selectedMonster) {
            case "Lord of Change":
              setTrackedStats(trackedStats.concat([<LordOfChange key={"keyIDNumber: "+keyIDNumber}/>]));
              break;
            case "Kairos Fateweaver":
              setTrackedStats(trackedStats.concat([<KairosFateweaver key={"keyIDNumber: "+keyIDNumber}/>]));
              break;
            case "Megaboss on Maw-Krusha":
              setTrackedStats(trackedStats.concat([<MegaBossOnMawKrusha key={"keyIDNumber: "+keyIDNumber}/>]));
              break;
            case "Thanquol":
              setTrackedStats(trackedStats.concat([<Thanquol key={"keyIDNumber: "+keyIDNumber}/>]));
              break;
            case "Verminlord Warpseer":
              setTrackedStats(trackedStats.concat([<VerminlordWarpseer key={"keyIDNumber: "+keyIDNumber}/>]));
              break;
            case "Verminlord Corruptor":
              setTrackedStats(trackedStats.concat([<VerminlordCorruptor key={"keyIDNumber: "+keyIDNumber}/>]));
              break;
            default:
              break;
          }
          setKeyIDNumber(keyIDNumber + 1);
        }}
      >
        Track Monster
      </Button>
      {trackedStats}
    </div>
  );
}
