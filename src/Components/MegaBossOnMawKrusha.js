import { Button } from "@material-ui/core";
import { useState } from "react";
import { WeaponProfile } from "./WeaponProfile";

export function MegaBossOnMawKrusha() {

const [wounds, setWounds] = useState(0);
const [move, setMove] = useState(12);
const [mightyFistsAndDestructiveBulk, setMightyFistsAndDestructiveBulk] = useState(8);
const [weaponChoice, setWeaponChoice] = useState('Boss Gore-hacka and Choppa');
const [attackProfiles, setAttackProfiles] = useState([]);

    return (
        <div className="StatBlock">
            <h4>Megaboss on Maw-Krusha</h4>
            <p>Wounds: {wounds}/15</p>
            <Button variant='contained' color='primary' onClick={() => {
                const allocatedWounds = wounds + 1
                setWounds(allocatedWounds);
                if(allocatedWounds < 4){
                    setMove(12);
                    setMightyFistsAndDestructiveBulk(8);
                }
                else if(allocatedWounds < 7){
                    setMove(10);
                    setMightyFistsAndDestructiveBulk(7);
                }
                else if(allocatedWounds < 11){
                    setMove(8);
                    setMightyFistsAndDestructiveBulk(6);
                }
                else if(allocatedWounds < 14){
                    setMove(6);
                    setMightyFistsAndDestructiveBulk(5);
                }
                else {
                    setMove(4);
                    setMightyFistsAndDestructiveBulk(4);
                }
            }}>
                Damage
            </Button>
            <Button variant='contained' color='primary' onClick={() => {
                const allocatedWounds = wounds - 1
                setWounds(allocatedWounds);
                if(allocatedWounds < 4){
                    setMove(12);
                    setMightyFistsAndDestructiveBulk(8);
                }
                else if(allocatedWounds < 7){
                    setMove(10);
                    setMightyFistsAndDestructiveBulk(7);
                }
                else if(allocatedWounds < 11){
                    setMove(8);
                    setMightyFistsAndDestructiveBulk(6);
                }
                else if(allocatedWounds < 14){
                    setMove(6);
                    setMightyFistsAndDestructiveBulk(5);
                }
                else {
                    setMove(4);
                    setMightyFistsAndDestructiveBulk(4);
                }
            }}>
                Heal
            </Button>
            <p>Move: {move}", Save: 3+, Bravery: 8</p>
            <WeaponProfile name='Innard-bursting Bellow - MISSILE' range='8"' attacks='D6' toHit='2+' toWound='3+' rend='-1' damage='1' />
            <WeaponProfile name='Mighty Fists and Tail - MELEE' range='1"' attacks={mightyFistsAndDestructiveBulk} toHit='3+' toWound='3+' rend='-2' damage='2' />
            {attackProfiles}
            <select onChange={(event) => setWeaponChoice(event.target.value)}>
                <option value='Boss Gore-hacka and Choppa'>Boss Gore-hacka and Choppa</option>
                <option value='Boss Choppa and Rip-toof Fist'>Boss Choppa and Rip-toof Fist</option>
            </select>
            <Button variant="contained" onClick={() => {
                switch (weaponChoice) {
                    case 'Boss Gore-hacka and Choppa':
                        setAttackProfiles(attackProfiles.concat([<WeaponProfile name='Boss Gore-hacka and Choppa - MELEE' range='2"' attacks='8' toHit='3+' toWound='3+' rend='-1' damage='2' />]));
                        break;
                    case 'Boss Choppa and Rip-toof Fist':
                        setAttackProfiles(attackProfiles.concat([<WeaponProfile name='Boss Choppa and Rip-toof Fist - MELEE' range='1"' attacks='6' toHit='3+' toWound='3+' rend='-1' damage='2' />]));
                        break;
                    default:
                        break;
                }
            }}>Choose Weapon</Button>
            <p>Destructive Bulk Dice: {mightyFistsAndDestructiveBulk}</p>
        </div>
    );
}