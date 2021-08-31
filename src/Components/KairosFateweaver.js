import { Button } from "@material-ui/core";
import { useState } from "react";
import { WeaponProfile } from "./WeaponProfile";

export function KairosFateweaver() {

const [move, setMove] = useState(12);
const [wounds, setWounds] = useState(0);
const [staffOfTommorowWound, setStaffOfTommorowWound] = useState('1+');
const [giftOfChangeDamage, setGiftOfChangeDamage] = useState('6');

    return(
        <div className="StatBlock">
            <h4>Kairos Fateweaver</h4>
            <p>Wounds: {wounds}/14</p>
            <Button variant="contained" color="primary" onClick={() => {
                const allocatedWounds = wounds + 1;
                setWounds(allocatedWounds);
                if(allocatedWounds < 4){
                    setMove(12);
                    setStaffOfTommorowWound('1+');
                    setGiftOfChangeDamage('6');
                }
                else if(allocatedWounds < 7){
                    setMove(10);
                    setStaffOfTommorowWound('2+');
                    setGiftOfChangeDamage('D6');
                }
                else if(allocatedWounds < 10){
                    setMove(9);
                    setStaffOfTommorowWound('3+');
                    setGiftOfChangeDamage('3');
                }
                else if(allocatedWounds < 13){
                    setMove(8);
                    setStaffOfTommorowWound('4+');
                    setGiftOfChangeDamage('D3');
                }
                else {
                    setMove(7);
                    setStaffOfTommorowWound('5+');
                    setGiftOfChangeDamage('1');
                }
            }}>Damage</Button>
            <Button variant="contained" color="primary" onClick={() => {
                const allocatedWounds = wounds - 1;
                setWounds(allocatedWounds);
                if(allocatedWounds < 4){
                    setMove(12);
                    setStaffOfTommorowWound('1+');
                    setGiftOfChangeDamage('6');
                }
                else if(allocatedWounds < 7){
                    setMove(10);
                    setStaffOfTommorowWound('2+');
                    setGiftOfChangeDamage('D6');
                }
                else if(allocatedWounds < 10){
                    setMove(9);
                    setStaffOfTommorowWound('3+');
                    setGiftOfChangeDamage('3');
                }
                else if(allocatedWounds < 13){
                    setMove(8);
                    setStaffOfTommorowWound('4+');
                    setGiftOfChangeDamage('D3');
                }
                else {
                    setMove(7);
                    setStaffOfTommorowWound('5+');
                    setGiftOfChangeDamage('1');
                }
            }}>Heal</Button>
            <p>Move: {move}", Save: 4+, Bravery: 10</p>
            <WeaponProfile name='Staff of Tomorrow - MELEE' range='3"' attacks='3' toHit='3+' toWound={staffOfTommorowWound} rend='-1' damage='2' />
            <WeaponProfile name='Beaks and Claws - MELEE' range='1"' attacks='5' toHit='4+' toWound='3+' rend='-1' damage='2' />
            <p>Gift of Change damage: {giftOfChangeDamage}</p>
        </div>
    );
}