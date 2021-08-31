import { Button } from "@material-ui/core";
import { useState } from "react";
import { WeaponProfile } from "./WeaponProfile";

export function VerminlordCorruptor() {

const [move, setMove] = useState(12);
const [wounds, setWounds] = useState(0);
const [prehensileTailsAttacks, setPrehensileTailsAttacks] = useState(4);
const [plaguereapersAttacks, setPlaguereapersAttacks] = useState('10');

    return (<div className="StatBlock">
        <h4>Verminlord Corruptor</h4>
        <p>Wounds: {wounds}/12</p>
        <Button variant="contained" color="primary" onClick={() => {
            const allocatedWounds = wounds + 1;
            setWounds(allocatedWounds);
            if(allocatedWounds < 3){
                setMove(12);
                setPrehensileTailsAttacks(4);
                setPlaguereapersAttacks('10');
            }
            else if(allocatedWounds < 5){
                setMove(10);
                setPrehensileTailsAttacks(3);
                setPlaguereapersAttacks('9');
            }
            else if(allocatedWounds < 8){
                setMove(8);
                setPrehensileTailsAttacks(2);
                setPlaguereapersAttacks('8');
            }
            else if(allocatedWounds < 10){
                setMove(6);
                setPrehensileTailsAttacks(1);
                setPlaguereapersAttacks('7');
            }
            else {
                setMove(4);
                setPrehensileTailsAttacks(0);
                setPlaguereapersAttacks('6');
            }
        }}>Damage</Button>
         <Button variant="contained" color="primary" onClick={() => {
            const allocatedWounds = wounds - 1;
            setWounds(allocatedWounds);
            if(allocatedWounds < 3){
                setMove(12);
                setPrehensileTailsAttacks(4);
                setPlaguereapersAttacks('10');
            }
            else if(allocatedWounds < 5){
                setMove(10);
                setPrehensileTailsAttacks(3);
                setPlaguereapersAttacks('9');
            }
            else if(allocatedWounds < 8){
                setMove(8);
                setPrehensileTailsAttacks(2);
                setPlaguereapersAttacks('8');
            }
            else if(allocatedWounds < 10){
                setMove(6);
                setPrehensileTailsAttacks(1);
                setPlaguereapersAttacks('7');
            }
            else {
                setMove(4);
                setPrehensileTailsAttacks(0);
                setPlaguereapersAttacks('6');
            }
        }}>Heal</Button>
        <p>Move: {move}", Save: 4+, Bravery: 10</p>
        <WeaponProfile name='Prehensile Tails - MISSILE' range='6"' attacks={prehensileTailsAttacks} toHit='3+' toWound='3+' rend='-1' damage='1' />
        <WeaponProfile name='Plaguereapers - MELEE' range='3"' attacks={plaguereapersAttacks} toHit='3+' toWound='3+' rend='-' damage='1' />
    </div>);
}