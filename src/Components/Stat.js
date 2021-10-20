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

export function Stat(props) {
  const [statValue, setStatValue] = useState(props.value);
  const [changeValue, setChangeValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setStatValue(statValue + changeValue);
    setOpen(false);
  };

  return (
    <>
      {visible ? (
        <div className="StatBlock">
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>{props.name}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Choose a value to change this stat with
              </DialogContentText>
              <TextField
                label="Change by"
                type="number"
                onChange={(event) => setChangeValue(event.target.valueAsNumber)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Confirm</Button>
            </DialogActions>
          </Dialog>
          {props.name}: {statValue}
          {props.modifiable && (
            <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            Change Value
          </Button>
          )}
          <br/>
          <br/>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setVisible(false)}
          >
            Stop Tracking This
          </Button>
        </div>
      ) : null}
    </>
  );
}
