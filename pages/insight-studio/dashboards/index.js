import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

import PropTypes from "prop-types";
import {
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";

import Button from "@components/atoms/Button";

import { visuallyHidden } from "@mui/utils";
import Icon from "@components/atoms/Icon";

import GlobalTopbar from "@components/organisms/GlobalTopbar";
import Search from "@components/molecules/Search";

import { myDashboards } from "@data/myDashboards";
import AvatarGroup from "@components/molecules/AvatarGroup";
import { users } from "@data/users";

const columns = [
  { field: "name", headerName: "Name", width: 320 },
  { field: "updatedAt", headerName: "Senast uppdaterad", width: 240 },
  { field: "sharedWith", headerName: "Delas med", width: 240 },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Namn",
  },
  {
    id: "updatedAt",
    numeric: false,
    disablePadding: false,
    label: "Senast ändrad",
  },
  {
    id: "sharedWith",
    numeric: false,
    disablePadding: false,
    label: "Delas med",
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function DashboardItem(props) {
  return (
    <ListItem
      component="span"
      sx={{
        py: 0,
        minHeight: 32,
        "& .MuiListItemIcon-root": {
          minWidth: 0,
          marginRight: 2,
        },
      }}
    >
      <ListItemIcon sx={{ color: "inherit" }}>
        <Icon name="WebTwoTone" color="primary" />
      </ListItemIcon>
      <ListItemText
        primary={props.name}
        primaryTypographyProps={{ fontSize: 14, fontWeight: "medium" }}
      />
    </ListItem>
  );
}

export default function Page() {
  const router = useRouter();

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (event, id) => {
    router.push(router.asPath + "/" + id);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const emptyRows = Math.max(0, (1 + page) * rowsPerPage - myDashboards.length);

  return (
    <>
      <Head>
        <title>Dashboards | Homepal</title>
      </Head>
      <GlobalTopbar
        title="Dashboards"
        breadcrumbs={[
          { title: "Insight Studio", link: "/insight-studio" },
          { title: "Dashboards", link: "/insight-studio/dashboards" },
        ]}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Search placeholder="Sök efter dashboard" />
          <Box
            sx={{
              display: "block",
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<Icon name="AddOutlined" />}
              sx={{ whiteSpace: "nowrap", minWidth: "auto" }}
            >
              Skapa dashboard
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TableContainer
            sx={{
              flexGrow: 1,
            }}
            component={Paper}
          >
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={"medium"}
            >
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={myDashboards.length}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
               rows.sort(getComparator(order, orderBy)).slice() */}
                {stableSort(myDashboards, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id)}
                        role="checkbox"
                        tabIndex={-1}
                        key={row.title}
                        sx={{ cursor: "default" }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          padding="none"
                          sx={{ fontWeight: 500 }}
                        >
                          <DashboardItem name={row.title} />
                        </TableCell>
                        <TableCell align="left">{row.updatedAt}</TableCell>
                        <TableCell align="left">
                          {/* row.sharedWith */}

                          <Box sx={{ display: "flex" }}>
                            <AvatarGroup users={users} />
                            <Box sx={{ flexGrow: 1 }} />
                          </Box>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            labelRowsPerPage="Antal per sida"
            rowsPerPageOptions={[10]}
            component="div"
            count={myDashboards.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelDisplayedRows={(page) =>
              `${page.from}–${page.to} av ${
                page.count !== -1 ? page.count : `mer än ${page.to}`
              }`
            }
          />
        </Box>
      </Box>
    </>
  );
}
