import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

export function WeaponProfile(props) {
  return (
    <div className="WeaponProfile">
      <h6>{props.name}</h6>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Range</TableCell>
            <TableCell>Attacks</TableCell>
            <TableCell>To Hit</TableCell>
            <TableCell>To Wound</TableCell>
            <TableCell>Rend</TableCell>
            <TableCell>Damage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{props.range}</TableCell>
            <TableCell>{props.attacks}</TableCell>
            <TableCell>{props.toHit}</TableCell>
            <TableCell>{props.toWound}</TableCell>
            <TableCell>{props.rend}</TableCell>
            <TableCell>{props.damage}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
