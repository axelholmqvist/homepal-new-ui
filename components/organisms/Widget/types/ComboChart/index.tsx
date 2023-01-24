import Widget from "@components/organisms/Widget";

import { useTheme } from "@mui/material/styles";

import "chart.js/auto";
import { useEffect, useRef, useState } from "react";
import { Chart } from "react-chartjs-2";
import { ScriptableContext } from "chart.js/auto";
import { createGradient } from "../conf";

const ComboChart = (props: any) => {
  const theme = useTheme();

  const data = () => {
    return {
      labels: [
        "IT-ärenden",
        "SC1 Styr- och övervakningssystem",
        "SC2 Byggnad utvändigt",
        "SC3 Byggnad invändigt",
        "SC4 Inneklimat",
        "SC4 VA-, VVS-, Kyla",
        "SC5 Elsystem",
        "SC6 Tele- och datasystem",
        "SC7 Transportsystem",
        "SC8 Kök/Tvätt",
        "SD Utemiljö",
        "SG Säkerhet",
      ],
      datasets: [
        {
          data: [232, 234, 453, 212, 342, 124, 198, 238, 428, 198, 262, 178],
          fill: "start",
          backgroundColor: (context: ScriptableContext<"bar">) => {
            const gradient = createGradient(
              context.chart.ctx,
              context.chart.chartArea
            );
            return gradient;
          },
          borderColor: theme.palette.secondary.main,
        },
      ],
    };
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
        borderRadius: 12,
      },
      point: {
        radius: 0,
        hitRadius: 0,
      },
    },
    scales: {
      xAxis: {
        display: true,
      },
      yAxis: {
        display: true,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <Widget title={props.title} subtitle={props.subtitle}>
      <Chart type="bar" data={data()} options={options} />
    </Widget>
  );
};

export default ComboChart;
