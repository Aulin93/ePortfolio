import { Button } from "@material-ui/core";
import { useState } from "react";
import { WeaponProfile } from "./WeaponProfile";

export function VerminlordWarpseer () {

const [move, setMove] = useState(12);
const [wounds, setWounds] = useState(0);
const [prehensileTailsAttacks, setPrehensileTailsAttacks] = useState(4);
const [doomGlaiveWound, setDoomGlaiveWound] = useState('2+');

    return (<div className="StatBlock">
        <h4>Verminlord Warpseer</h4>
        <p>Wounds: {wounds}/12</p>
        <Button variant="contained" color="primary" onClick={() => {
            const allocatedWounds = wounds + 1;
            setWounds(allocatedWounds);
            if(allocatedWounds < 3){
                setMove(12);
                setPrehensileTailsAttacks(4);
                setDoomGlaiveWound('2+');
            }
            else if(allocatedWounds < 5){
                setMove(10);
                setPrehensileTailsAttacks(3);
                setDoomGlaiveWound('2+');
            }
            else if(allocatedWounds < 8){
                setMove(8);
                setPrehensileTailsAttacks(2);
                setDoomGlaiveWound('3+');
            }
            else if(allocatedWounds < 10){
                setMove(6);
                setPrehensileTailsAttacks(1);
                setDoomGlaiveWound('3+');
            }
            else {
                setMove(4);
                setPrehensileTailsAttacks(0);
                setDoomGlaiveWound('4+');
            }
        }}>Damage</Button>
         <Button variant="contained" color="primary" onClick={() => {
            const allocatedWounds = wounds - 1;
            setWounds(allocatedWounds);
            if(allocatedWounds < 3){
                setMove(12);
                setPrehensileTailsAttacks(4);
                setDoomGlaiveWound('2+');
            }
            else if(allocatedWounds < 5){
                setMove(10);
                setPrehensileTailsAttacks(3);
                setDoomGlaiveWound('2+');
            }
            else if(allocatedWounds < 8){
                setMove(8);
                setPrehensileTailsAttacks(2);
                setDoomGlaiveWound('3+');
            }
            else if(allocatedWounds < 10){
                setMove(6);
                setPrehensileTailsAttacks(1);
                setDoomGlaiveWound('3+');
            }
            else {
                setMove(4);
                setPrehensileTailsAttacks(0);
                setDoomGlaiveWound('4+');
            }
        }}>Heal</Button>
        <p>Move: {move}", Save: 4+, Bravery: 10</p>
        <WeaponProfile name='Prehensile Tails - MISSILE' range='6"' attacks={prehensileTailsAttacks} toHit='3+' toWound='3+' rend='-1' damage='1' />
        <WeaponProfile name='Doom Glaive - MELEE' range='3"' attacks='6' toHit='3+' toWound={doomGlaiveWound} rend='-1' damage='D3' />
    </div>);
}