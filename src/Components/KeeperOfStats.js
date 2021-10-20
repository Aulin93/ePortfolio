import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import { CustomStatBlock } from "./CustomStatBlock";
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
  const [open, setOpen] = useState(false);
  const [showTrackerOptions, setShowTrackerOptions] = useState(true);
  const [addingValueTracker, setAddingValueTracker] = useState(false);
  const [addingMonsterTracker, setAddingMonsterTracker] = useState(false);
  const [addingCustomStatBlock, setAddingCustomStatBlock] = useState(false);

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
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
          setShowTrackerOptions(true);
          setAddingValueTracker(false);
          setAddingMonsterTracker(false);
          setAddingCustomStatBlock(false);
        }}
      >
        {showTrackerOptions && (
          <>
            <DialogTitle>Add New Tracker</DialogTitle>
            <DialogContent>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setShowTrackerOptions(false);
                  setAddingValueTracker(true);
                }}
              >
                Add Value Tracker
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setShowTrackerOptions(false);
                  setAddingMonsterTracker(true);
                }}
              >
                Add Monster Tracker
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setShowTrackerOptions(false);
                  setAddingCustomStatBlock(true);
                }}
              >
                Add Custom Stat Block
              </Button>
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </DialogActions>
          </>
        )}
        {addingValueTracker && (
          <>
            <DialogTitle>Add New Value Tracker</DialogTitle>
            <DialogContent>
              <TextField
                label="Stat Name"
                onChange={(event) => setStatName(event.target.value)}
              />
              <TextField
                label="Stat Value"
                type="number"
                onChange={(event) => setStatValue(event.target.valueAsNumber)}
              />
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                onClick={() => {
                  setTrackedStats(
                    trackedStats.concat([
                      <Stat
                        name={statName}
                        value={statValue}
                        modifiable={true}
                        key={"keyIDNumber: " + keyIDNumber}
                      />,
                    ])
                  );
                  setKeyIDNumber(keyIDNumber + 1);
                  setShowTrackerOptions(true);
                  setAddingValueTracker(false);
                  setOpen(false);
                }}
              >
                Confirm
              </Button>
            </DialogActions>
          </>
        )}
        {addingMonsterTracker && (
          <>
            <DialogTitle>Add Monster Tracker</DialogTitle>
            <DialogContent>
              <select
                onChange={(event) => setSelectedMonster(event.target.value)}
              >
                <option value="Lord of Change">Lord of Change</option>
                <option value="Kairos Fateweaver">Kairos Fateweaver</option>
                <option value="Megaboss on Maw-Krusha">
                  Megaboss on Maw-Krusha
                </option>
                <option value="Thanquol">Thanquol</option>
                <option value="Verminlord Warpseer">Verminlord Warpseer</option>
                <option value="Verminlord Corruptor">
                  Verminlord Corruptor
                </option>
              </select>
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                onClick={() => {
                  switch (selectedMonster) {
                    case "Lord of Change":
                      setTrackedStats(
                        trackedStats.concat([
                          <LordOfChange key={"keyIDNumber: " + keyIDNumber} />,
                        ])
                      );
                      break;
                    case "Kairos Fateweaver":
                      setTrackedStats(
                        trackedStats.concat([
                          <KairosFateweaver
                            key={"keyIDNumber: " + keyIDNumber}
                          />,
                        ])
                      );
                      break;
                    case "Megaboss on Maw-Krusha":
                      setTrackedStats(
                        trackedStats.concat([
                          <MegaBossOnMawKrusha
                            key={"keyIDNumber: " + keyIDNumber}
                          />,
                        ])
                      );
                      break;
                    case "Thanquol":
                      setTrackedStats(
                        trackedStats.concat([
                          <Thanquol key={"keyIDNumber: " + keyIDNumber} />,
                        ])
                      );
                      break;
                    case "Verminlord Warpseer":
                      setTrackedStats(
                        trackedStats.concat([
                          <VerminlordWarpseer
                            key={"keyIDNumber: " + keyIDNumber}
                          />,
                        ])
                      );
                      break;
                    case "Verminlord Corruptor":
                      setTrackedStats(
                        trackedStats.concat([
                          <VerminlordCorruptor
                            key={"keyIDNumber: " + keyIDNumber}
                          />,
                        ])
                      );
                      break;
                    default:
                      break;
                  }
                  setKeyIDNumber(keyIDNumber + 1);
                  setShowTrackerOptions(true);
                  setAddingMonsterTracker(false);
                  setOpen(false);
                }}
              >
                Confirm
              </Button>
            </DialogActions>
          </>
        )}
        {addingCustomStatBlock && (<>
        <DialogTitle>Add New Custom Stat Block</DialogTitle>
        <DialogContent>
          <TextField label="Stat Block Name" onChange={(event) => setStatName(event.target.value)} />
        </DialogContent>
        <DialogActions>
        <Button
                variant="oulined"
                onClick={() => {
                  setTrackedStats(trackedStats.concat([<CustomStatBlock name={statName} />]));
                  setShowTrackerOptions(true);
                  setAddingCustomStatBlock(false);
                  setOpen(false);
                }}
              >
                Confirm
              </Button>
        </DialogActions>
        </>)}
      </Dialog>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add New Tracker
      </Button>

      {trackedStats}
    </div>
  );
}
