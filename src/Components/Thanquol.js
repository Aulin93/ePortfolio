import { Button } from "@material-ui/core";
import { useState } from "react";
import { WeaponProfile } from "./WeaponProfile";

export function Thanquol (){

const [move, setMove] = useState(10);
const [wounds, setWounds] = useState(0);
const [crushingBlowsAttacks, setCrushingBlowsAttacks] = useState(6);
const [staffOfTheHornedRatModifier, setStaffOfTheHornedRatModifier] = useState(2);
const [numberOfWarpfireBraziers, setNumberOfWarpfireBraziers] = useState(0);

    return(
        <div className="StatBlock">
            <h4>Thanquol</h4>
            <p>Wounds: {wounds}/14</p>
            <Button variant="contained" color="primary" onClick={() => {
                const allocatedWounds = wounds + 1;
                setWounds(allocatedWounds);
                if(allocatedWounds < 4){
                    setMove(10);
                    setCrushingBlowsAttacks(6);
                    setStaffOfTheHornedRatModifier(2);
                }
                else if(allocatedWounds < 6){
                    setMove(9);
                    setCrushingBlowsAttacks(5);
                    setStaffOfTheHornedRatModifier(2);
                }
                else if(allocatedWounds < 9){
                    setMove(8);
                    setCrushingBlowsAttacks(4);
                    setStaffOfTheHornedRatModifier(1);
                }
                else if(allocatedWounds < 11){
                    setMove(7);
                    setCrushingBlowsAttacks(3);
                    setStaffOfTheHornedRatModifier(1);
                }
                else {
                    setMove(6);
                    setCrushingBlowsAttacks(2);
                    setStaffOfTheHornedRatModifier(0);
                }
            }}>Damage</Button>
             <Button variant="contained" color="primary" onClick={() => {
                const allocatedWounds = wounds - 1;
                setWounds(allocatedWounds);
                if(allocatedWounds < 4){
                    setMove(10);
                    setCrushingBlowsAttacks(6);
                    setStaffOfTheHornedRatModifier(2);
                }
                else if(allocatedWounds < 6){
                    setMove(9);
                    setCrushingBlowsAttacks(5);
                    setStaffOfTheHornedRatModifier(2);
                }
                else if(allocatedWounds < 9){
                    setMove(8);
                    setCrushingBlowsAttacks(4);
                    setStaffOfTheHornedRatModifier(1);
                }
                else if(allocatedWounds < 11){
                    setMove(7);
                    setCrushingBlowsAttacks(3);
                    setStaffOfTheHornedRatModifier(1);
                }
                else {
                    setMove(6);
                    setCrushingBlowsAttacks(2);
                    setStaffOfTheHornedRatModifier(0);
                }
            }}>Heal</Button>
            <p>Move: {move}", Save: 4+, Bravery: 7</p>
            <WeaponProfile name='Staff of the Horned Rat - MELEE' range='2"' attacks='2' toHit='4+' toWound='3+' rend='-1' damage='D3' />
            <WeaponProfile name='Warpfire Braziers - MELEE' range='2"' attacks={numberOfWarpfireBraziers * 2} toHit='3+' toWound='3+' rend='-2' damage='3' />
            <WeaponProfile name='Crushing Blows - MELEE' range='2"' attacks={crushingBlowsAttacks} toHit='4+' toWound='3+' rend='-1' damage='2' />
            <Button variant="contained" onClick={() => {
                if(numberOfWarpfireBraziers < 4){
                    const warpfireBraziers = numberOfWarpfireBraziers + 1;
                    setNumberOfWarpfireBraziers(warpfireBraziers);
                }
            }}>Add Warpfire Brazier</Button>
            <p>Staff of the Horned Rat casting modifier: +{staffOfTheHornedRatModifier}</p>
        </div>
    );
}