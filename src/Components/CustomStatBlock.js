import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import { WeaponProfile } from "./WeaponProfile";
import { Stat } from "./Stat";

export function CustomStatBlock(props) {
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [showTrackerOptions, setShowTrackerOptions] = useState(true);
  const [addingWeaponProfile, setAddingWeaponProfile] = useState(false);
  const [addingValueTracker, setAddingValueTracker] = useState(false);
  const [trackedStats, setTrackedStats] = useState([]);
  const [weaponName, setWeaponName] = useState("");
  const [weaponRange, setWeaponRange] = useState('"');
  const [weaponAttacks, setWeaponAttacks] = useState("");
  const [weaponToHit, setWeaponToHit] = useState("+");
  const [weaponToWound, setWeaponToWound] = useState("+");
  const [weaponRend, setWeaponRend] = useState("-");
  const [weaponDamage, setWeaponDamage] = useState("");
  const [statName, setStatName] = useState("");
  const [statValue, setStatValue] = useState(0);
  const [isStatValueModifiable, setIsstatValueModifiable] = useState(true);

  return (
    <>
      {visible && (
        <div className="StatBlock">
          <Dialog
            open={open}
            onClose={() => {
              setOpen(false);
              setShowTrackerOptions(true);
              setAddingWeaponProfile(false);
              setAddingValueTracker(false);
            }}
          >
            {showTrackerOptions && (
              <>
                <DialogTitle>Add New Tracker</DialogTitle>
                <DialogContent>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setShowTrackerOptions(false);
                      setAddingWeaponProfile(true);
                    }}
                  >
                    Add Weapon Profile
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setShowTrackerOptions(false);
                      setAddingValueTracker(true);
                    }}
                  >
                    Add Value Tracker
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
            {addingWeaponProfile && (
              <>
                <DialogTitle>Add New Weapon Profile</DialogTitle>
                <DialogContent>
                  <TextField
                    label="Weapon Name"
                    onChange={(event) => setWeaponName(event.target.value)}
                  />
                  <TextField
                    label="Range"
                    onChange={(event) => setWeaponRange(event.target.value)}
                  />
                  <TextField
                    label="Number of Attacks"
                    onChange={(event) => setWeaponAttacks(event.target.value)}
                  />
                  <TextField
                    label="To Hit"
                    onChange={(event) => setWeaponToHit(event.target.value)}
                  />
                  <TextField
                    label="To Wound"
                    onChange={(event) => setWeaponToWound(event.target.value)}
                  />
                  <TextField
                    label="Rend"
                    onChange={(event) => setWeaponRend(event.target.value)}
                  />
                  <TextField
                    label="Damage"
                    onChange={(event) => setWeaponDamage(event.target.value)}
                  />
                </DialogContent>
                <DialogActions>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      setTrackedStats(
                        trackedStats.concat([
                          <WeaponProfile
                            name={weaponName}
                            range={weaponRange}
                            attacks={weaponAttacks}
                            toHit={weaponToHit}
                            toWound={weaponToWound}
                            rend={weaponRend}
                            damage={weaponDamage}
                          />
                        ])
                      );
                      setOpen(false);
                      setShowTrackerOptions(true);
                      setAddingWeaponProfile(false);
                    }}
                  >
                    Add Profile
                  </Button>
                </DialogActions>
              </>
            )}
            {addingValueTracker && (<>
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
              <Checkbox label="Modifiable?" defaultChecked onChange={(event) => setIsstatValueModifiable(event.target.checked)}/>
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
                        modifiable={isStatValueModifiable}
                      />,
                    ])
                  );
                  setShowTrackerOptions(true);
                  setAddingValueTracker(false);
                  setOpen(false);
                }}
              >
                Track New Value
              </Button>
            </DialogActions>
            </>)}
          </Dialog>
          <h4>{props.name}</h4>
          {trackedStats}
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            Add Stat
          </Button>
          <br />
          <br />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setVisible(false)}
          >
            Stop Tracking This
          </Button>
        </div>
      )}
    </>
  );
}
