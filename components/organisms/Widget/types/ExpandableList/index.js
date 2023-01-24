import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Collapse,
  IconButton,
} from "@mui/material";

import Icon from "@components/atoms/Icon";
import Widget from "@components/organisms/Widget";

function createData(
  name,
  result,
  resultSq,
  resultLastPeriod,
  resultLastPeriodSq,
  accounts
) {
  return {
    name,
    result,
    resultSq,
    resultLastPeriod,
    resultLastPeriodSq,
    accounts,
  };
}

const rows = [
  createData("Intäkter", "579 078 347", "979,1", "573 826 347", "960,9", [
    {
      name: "3001 Bruttohyra Bostäder",
      result: "554 321 530",
      resultSq: "937,2",
      resultLastPeriod: "537 715 351",
      resultLastPeriodSq: "900,4",
    },
    {
      name: "3002 Bruttohyra Lokaler",
      result: "26 728 786",
      resultSq: "45,2",
      resultLastPeriod: "29 614 629",
      resultLastPeriodSq: "49,6",
    },
    {
      name: "3003 Intäkter Parkeringsplatser",
      result: "15 940 134",
      resultSq: "27,0",
      resultLastPeriod: "15 634 394",
      resultLastPeriodSq: "26,2",
    },
  ]),
  createData(
    "Driftkostnad",
    "-245 499 462",
    "-415,1",
    "-259 736 501",
    "-439,2",
    [
      {
        name: "3001 Bruttohyra Bostäder",
        result: "554 321 530",
        resultSq: "937,2",
        resultLastPeriod: "537 715 351",
        resultLastPeriodSq: "900,4",
      },
      {
        name: "3002 Bruttohyra Lokaler",
        result: "26 728 786",
        resultSq: "45,2",
        resultLastPeriod: "29 614 629",
        resultLastPeriodSq: "49,6",
      },
      {
        name: "3003 Intäkter Parkeringsplatser",
        result: "15 940 134",
        resultSq: "27,0",
        resultLastPeriod: "15 634 394",
        resultLastPeriodSq: "26,2",
      },
    ]
  ),
  createData("Kostnader", "-245 499 462", "-415,1", "-314 818 358", "-527,2", [
    {
      name: "3001 Bruttohyra Bostäder",
      result: "554 321 530",
      resultSq: "937,2",
      resultLastPeriod: "537 715 351",
      resultLastPeriodSq: "900,4",
    },
    {
      name: "3002 Bruttohyra Lokaler",
      result: "26 728 786",
      resultSq: "45,2",
      resultLastPeriod: "29 614 629",
      resultLastPeriodSq: "49,6",
    },
    {
      name: "3003 Intäkter Parkeringsplatser",
      result: "15 940 134",
      resultSq: "27,0",
      resultLastPeriod: "15 634 394",
      resultLastPeriodSq: "26,2",
    },
  ]),
];

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow
        key={row.name}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            sx={{ mr: 1 }}
          >
            {open ? (
              <Icon name="KeyboardArrowUp" />
            ) : (
              <Icon name="KeyboardArrowDown" />
            )}
          </IconButton>
          <b>{row.name}</b>
        </TableCell>
        <TableCell>{row.result}</TableCell>
        <TableCell>{row.resultSq}</TableCell>
        <TableCell>{row.resultLastPeriod}</TableCell>
        <TableCell>{row.resultLastPeriodSq}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Table>
              <TableBody>
                {row.accounts.map((account) => (
                  <TableRow
                    key={account.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {account.name}
                    </TableCell>
                    <TableCell>{account.result}</TableCell>
                    <TableCell>{account.resultSq}</TableCell>
                    <TableCell>{account.resultLastPeriod}</TableCell>
                    <TableCell>{account.resultLastPeriodSq}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function List(props) {
  return (
    <Widget title={props.title} subtitle={props.subtitle}>
      <TableContainer sx={{ height: "100%" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Konto</TableCell>
              <TableCell>Utfall</TableCell>
              <TableCell>Utfall / kvm</TableCell>
              <TableCell>Utfall fg. period</TableCell>
              <TableCell>Utfall fg. period/ kvm</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Widget>
  );
}
