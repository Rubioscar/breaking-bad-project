import "scss/details.scss";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const RowTable = React.memo(({ name, value }) => (
  <TableRow
    key={name}
    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
  >
    <TableCell component="th" scope="row">
      {name}
    </TableCell>
    <TableCell align="right">{value}</TableCell>
  </TableRow>
));

const DetailsTable = React.memo(({ details }) => (
  <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <RowTable name="Marca" value={details.brand} />
          <RowTable name="Modelo" value={details.model} />
          <RowTable name="Precio" value={details.price} />
          <RowTable name="CPU" value={details.cpu} />
          <RowTable name="RAM" value={details.ram} />
          <RowTable name="SO" value={details.os} />
          <RowTable name="Resolucion" value={details.displayResolution} />
          <RowTable name="Bateria" value={details.battery} />
          <RowTable name="Camara" value={details.primaryCamera} />
          <RowTable name="Dimensiones" value={details.dimentions} />
          <RowTable name="Peso" value={details.weight} />
        </TableBody>
      </Table>
    </TableContainer>
  </>
));

export default DetailsTable;
