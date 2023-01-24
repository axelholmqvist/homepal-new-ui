import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import TrendChip from "@components/organisms/Widget/TrendChip";
import Widget from "@components/organisms/Widget";

function createData(name, comparedValue) {
  return { name, comparedValue };
}

const rows = [
  createData("IT-ärenden", 3),
  createData("SC1 Styr- och övervakningssystem", -1),
  createData("SC2 Byggnad utvändigt", 6),
  createData("SC3 Byggnad invändigt", 8),
  createData("SC4 Inneklimat", -3),
  createData("SC4 VA-, VVS-, Kyla", 5),
  createData("SC5 Elsystem", -1),
  createData("SC6 Tele- och datasystem", 5),
  createData("SD Utemiljö", 6),
  createData("SG Säkerhet", 2),
];

const List = (props) => {
  return (
    <Widget title={props.title} subtitle={props.subtitle}>
      <TableContainer sx={{ height: "100%" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Kategori</TableCell>
              <TableCell>Trend</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>
                  <TrendChip value={row.comparedValue} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Widget>
  );
};

export default List;
