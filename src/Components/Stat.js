import { Button } from "@material-ui/core";
import { useState } from "react";

export function Stat(props) {

    const [statValue, setStatValue] = useState(props.value)

    return (
        <div>
            {props.name}: {statValue}
            <Button variant="contained" color="primary" onClick={() => setStatValue(statValue + 1)}>Increment</Button>
            <Button variant="contained" color="primary" onClick={() => setStatValue(statValue - 1)}>Decrement</Button>
        </div>
    );
}