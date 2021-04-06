import { Button } from "@material-ui/core";
import { useState } from "react";

export function LordOfChange() {
  const [wounds, setWounds] = useState(0);
  const [move, setMove] = useState(12);
  const [staffOfTzeentch, setStaffOfTzeentch] = useState(1);
  const [infernalGateway, setInfernalGateway] = useState(3);

  return (
    <div>
      <h4>Lord of Change</h4>
      <p>Wounds: {wounds}/14</p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          const allocatedWounds = wounds + 1;
          setWounds(allocatedWounds);
          if (allocatedWounds < 4) {
            setMove(12);
            setStaffOfTzeentch(1);
            setInfernalGateway(3);
          } else if (allocatedWounds < 7) {
            setMove(10);
            setStaffOfTzeentch(2);
            setInfernalGateway(4);
          } else if (allocatedWounds < 10) {
            setMove(9);
            setStaffOfTzeentch(3);
          } else if (allocatedWounds < 13) {
            setMove(8);
            setStaffOfTzeentch(4);
            setInfernalGateway(4);
          } else {
            setMove(7);
            setStaffOfTzeentch(5);
            setInfernalGateway(5);
          }
        }}
      >
        Damage
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          const allocatedWounds = wounds - 1;
          setWounds(allocatedWounds);
          if (allocatedWounds < 4) {
            setMove(12);
            setStaffOfTzeentch(1);
            setInfernalGateway(3);
          } else if (allocatedWounds < 7) {
            setMove(10);
            setStaffOfTzeentch(2);
            setInfernalGateway(4);
          } else if (allocatedWounds < 10) {
            setMove(9);
            setStaffOfTzeentch(3);
          } else if (allocatedWounds < 13) {
            setMove(8);
            setStaffOfTzeentch(4);
            setInfernalGateway(4);
          } else {
            setMove(7);
            setStaffOfTzeentch(5);
            setInfernalGateway(5);
          }
        }}
      >
        Heal
      </Button>
      <p>Move: {move}</p>
      <p>Staff of Tzeentch to Wound: +{staffOfTzeentch}</p>
      <p>Infernal Gateway to Wound: +{infernalGateway}</p>
    </div>
  );
}
