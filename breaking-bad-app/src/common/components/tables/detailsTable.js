import "scss/details.scss";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FormattedMessage } from "react-intl";

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
          <RowTable
            name={<FormattedMessage id="name" defaultMessage="Name" />}
            value={details?.name}
          />
          <RowTable
            name={<FormattedMessage id="nickname" defaultMessage="Nickname" />}
            value={details?.nickname}
          />
          <RowTable
            name={
              <FormattedMessage id="portrayed" defaultMessage="Portrayed" />
            }
            value={details?.portrayed}
          />
          <RowTable
            name={<FormattedMessage id="birthday" defaultMessage="Birthday" />}
            value={details?.birthday}
          />
          <RowTable
            name={<FormattedMessage id="status" defaultMessage="Status" />}
            value={details?.status}
          />
          {details?.occupation?.map((e, index) =>
            index === 0 ? (
              <RowTable
                name={
                  <FormattedMessage
                    id="ocuppation"
                    defaultMessage="Ocuppation"
                  />
                }
                value={e}
              />
            ) : (
              <RowTable value={e} />
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  </>
));

export default DetailsTable;
