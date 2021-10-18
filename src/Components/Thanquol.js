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

export function Thanquol() {
  const [move, setMove] = useState(10);
  const [wounds, setWounds] = useState(0);
  const [changeValue, setChangeValue] = useState(0);
  const [crushingBlowsAttacks, setCrushingBlowsAttacks] = useState(6);
  const [staffOfTheHornedRatModifier, setStaffOfTheHornedRatModifier] =
    useState(2);
  const [numberOfWarpfireBraziers, setNumberOfWarpfireBraziers] = useState(0);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const allocateWounds = () => {
    const allocatedWounds = wounds + changeValue;
    setWounds(allocatedWounds);
    if (allocatedWounds < 4) {
      setMove(10);
      setCrushingBlowsAttacks(6);
      setStaffOfTheHornedRatModifier(2);
    } else if (allocatedWounds < 6) {
      setMove(9);
      setCrushingBlowsAttacks(5);
      setStaffOfTheHornedRatModifier(2);
    } else if (allocatedWounds < 9) {
      setMove(8);
      setCrushingBlowsAttacks(4);
      setStaffOfTheHornedRatModifier(1);
    } else if (allocatedWounds < 11) {
      setMove(7);
      setCrushingBlowsAttacks(3);
      setStaffOfTheHornedRatModifier(1);
    } else {
      setMove(6);
      setCrushingBlowsAttacks(2);
      setStaffOfTheHornedRatModifier(0);
    }
    setOpen(false);
  };

  return (
    <>
    {visible ? (
      <div className="StatBlock">
      <h4>Thanquol</h4>
      <p>Wounds: {wounds}/14</p>
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
      <p>Move: {move}", Save: 4+, Bravery: 7</p>
      <WeaponProfile
        name="Staff of the Horned Rat - MELEE"
        range='2"'
        attacks="2"
        toHit="4+"
        toWound="3+"
        rend="-1"
        damage="D3"
      />
      <WeaponProfile
        name="Warpfire Braziers - MELEE"
        range='2"'
        attacks={numberOfWarpfireBraziers * 2}
        toHit="3+"
        toWound="3+"
        rend="-2"
        damage="3"
      />
      <WeaponProfile
        name="Crushing Blows - MELEE"
        range='2"'
        attacks={crushingBlowsAttacks}
        toHit="4+"
        toWound="3+"
        rend="-1"
        damage="2"
      />
      <Button
        variant="contained"
        onClick={() => {
          if (numberOfWarpfireBraziers < 4) {
            const warpfireBraziers = numberOfWarpfireBraziers + 1;
            setNumberOfWarpfireBraziers(warpfireBraziers);
          }
        }}
      >
        Add Warpfire Brazier
      </Button>
      <p>
        Staff of the Horned Rat casting modifier: +{staffOfTheHornedRatModifier}
      </p>
      <Button variant="contained" color="secondary" onClick={() => setVisible(false)}>Stop Tracking This</Button>
    </div>
    ) : null}
    </>
  );
}
