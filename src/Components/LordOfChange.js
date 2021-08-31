import { Button } from "@material-ui/core";
import { useState } from "react";
import { WeaponProfile } from "./WeaponProfile";

export function LordOfChange() {
  const [wounds, setWounds] = useState(0);
  const [move, setMove] = useState(12);
  const [staffOfTzeentch, setStaffOfTzeentch] = useState(1);
  const [infernalGateway, setInfernalGateway] = useState(3);
  const [attackProfiles, setAttackProfiles] = useState([]);
  const [weaponChoice, setWeaponChoice] = useState("Rod of Sorcery");

  return (
    <div className="StatBlock">
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
          setAttackProfiles(attackProfiles);
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
      <p>Move: {move}", Save: 4+, Bravery: 10</p>
      <WeaponProfile name='Staff of Tzeentch - MELEE' range='3"' attacks='4' toHit='3+' toWound={staffOfTzeentch} rend='-' damage='1' />
      {attackProfiles}
      <select onChange={(event) => setWeaponChoice(event.target.value)}>
        <option value="Rod of Sorcery">Rod of Sorcery</option>
        <option value="Baleful Sword">Baleful Sword</option>
        <option value="Curved Beak and Wicked Talons">Curved Beak and Wicked Talons</option>
      </select>
      <Button variant="contained" onClick={() => {
        switch (weaponChoice) {
          case "Rod of Sorcery":
            setAttackProfiles(attackProfiles.concat([<WeaponProfile name='Rod of Sorcery - MISSILE' range='18"' attacks='2D6' toHit='3+' toWound='3+' rend='-1' damage='1' />]));
            break;
          case "Baleful Sword":
            setAttackProfiles(attackProfiles.concat([<WeaponProfile name='Baleful Sword - MELEE' range='3"' attacks='2' toHit='4+' toWound='2+' rend='-2' damage='3' />]));
            break;
          case "Curved Beak and Wicked Talons":
            setAttackProfiles(attackProfiles.concat([<WeaponProfile name='Curved Beak and Wicked Talons - MELEE' range='1"' attacks='4' toHit='4+' toWound='3+' rend='-1' damage='2' />]));
            break;
          default:
            break;
        }
      }}>
        Choose Weapon
      </Button>
      <p>Infernal Gateway to Wound: +{infernalGateway}</p>
    </div>
  );
}
