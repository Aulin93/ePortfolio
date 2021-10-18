import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import { WeaponProfile } from "./WeaponProfile";

export function VerminlordCorruptor() {
  const [move, setMove] = useState(12);
  const [wounds, setWounds] = useState(0);
  const [changeValue, setChangeValue] = useState(0);
  const [prehensileTailsAttacks, setPrehensileTailsAttacks] = useState(4);
  const [plaguereapersAttacks, setPlaguereapersAttacks] = useState("10");
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const allocateWounds = () => {
    const allocatedWounds = wounds + changeValue;
    setWounds(allocatedWounds);
    if (allocatedWounds < 3) {
      setMove(12);
      setPrehensileTailsAttacks(4);
      setPlaguereapersAttacks("10");
    } else if (allocatedWounds < 5) {
      setMove(10);
      setPrehensileTailsAttacks(3);
      setPlaguereapersAttacks("9");
    } else if (allocatedWounds < 8) {
      setMove(8);
      setPrehensileTailsAttacks(2);
      setPlaguereapersAttacks("8");
    } else if (allocatedWounds < 10) {
      setMove(6);
      setPrehensileTailsAttacks(1);
      setPlaguereapersAttacks("7");
    } else {
      setMove(4);
      setPrehensileTailsAttacks(0);
      setPlaguereapersAttacks("6");
    }
    setOpen(false);
  };

  return (
    <>
    {visible ? (
      <div className="StatBlock">
      <h4>Verminlord Corruptor</h4>
      <p>Wounds: {wounds}/12</p>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Allocate Wounds</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Assign a number of wounds to allocate
          </DialogContentText>
          <TextField
            label="Change by"
            type="number"
            onChange={(event) => setChangeValue(event.target.valueAsNumber)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={allocateWounds}>Confirm</Button>
        </DialogActions>
      </Dialog>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Allocate Wounds
      </Button>
      <p>Move: {move}", Save: 4+, Bravery: 10</p>
      <WeaponProfile
        name="Prehensile Tails - MISSILE"
        range='6"'
        attacks={prehensileTailsAttacks}
        toHit="3+"
        toWound="3+"
        rend="-1"
        damage="1"
      />
      <WeaponProfile
        name="Plaguereapers - MELEE"
        range='3"'
        attacks={plaguereapersAttacks}
        toHit="3+"
        toWound="3+"
        rend="-"
        damage="1"
      />
      <Button variant="contained" color="secondary" onClick={() => setVisible(false)}>Stop Tracking This</Button>
    </div>
    ) : null}
    </>
  );
}
