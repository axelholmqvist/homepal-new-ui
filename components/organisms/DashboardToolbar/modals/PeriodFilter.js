import Icon from "@components/atoms/Icon";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  Divider,
  Typography,
} from "@mui/material";
import { useState } from "react";

const options = [
  {
    title: "Idag",
    value: "today",
    divider: false,
  },
  {
    title: "Denna månad",
    value: "currentMonth",
    divider: false,
  },
  {
    title: "Detta kvartal",
    value: "currentQuarter",
    divider: false,
  },
  {
    title: "Detta år",
    value: "currentYear",
    divider: true,
  },
  {
    title: "Igår",
    value: "yesterday",
    divider: false,
  },
  {
    title: "Föregående månad",
    value: "previousMonth",
    divider: false,
  },
  {
    title: "Föregående kvartal",
    value: "previousQuarter",
    divider: false,
  },
  {
    title: "Föregående år",
    value: "previousYear",
    divider: true,
  },
  {
    title: "Senaste 30 dagarna",
    value: "lastMonth",
    divider: false,
  },
  {
    title: "Senaste 90 dagarna",
    value: "lastQuarter",
    divider: true,
  },
  {
    title: "All tid",
    value: "forever",
    divider: true,
  },
  {
    title: "Anpassat",
    value: "custom",
    divider: false,
  },
];

const PeriodFilter = (props) => {
  const [period, setPeriod] = useState("lastMonth");
  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <FormControl variant="standard" size="small">
      <Select
        value={period}
        onChange={handlePeriodChange}
        renderValue={(value) => {
          return (
            <Box sx={{ display: "flex", gap: 1 }}>
              <Icon name="DateRangeOutlined" fontSize="small" />
              <Typography>
                {options.find((option) => option.value === value).title}
              </Typography>
            </Box>
          );
        }}
        MenuProps={{ disableScrollLock: true }}
      >
        {options.map((option, i) => [
          <MenuItem value={option.value} key={i}>
            {option.title}
          </MenuItem>,
          option.divider ? <Divider /> : null,
        ])}
      </Select>
    </FormControl>
  );
};

export default PeriodFilter;
