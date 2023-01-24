import "chart.js/auto";
import { Chart } from "react-chartjs-2";

import { useState, useEffect, useRef } from "react";

import { useTheme } from "@mui/material/styles";
import { createGradient } from "../conf";
import { ScriptableContext } from "chart.js/auto";

const KPILine = (props: any) => {
  const chartRef = useRef(null);
  const theme = useTheme();

  const [options, setOptions] = useState({});

  const data = () => {
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Maj",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          data: [0.1, 0.4, 0.3, 0.2, 0.3, 0.5, 0.4, 0.5, 0.3, 0.2, 0.2, 0.3],
          fill: "start",
          backgroundColor: (context: ScriptableContext<"line">) => {
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

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const options = {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          displayColors: false,
        },
      },
      elements: {
        line: {
          tension: 0.2,
          borderWidth: 2,
        },
        point: {
          radius: 0,
          hitRadius: 12,
        },
      },
      scales: {
        xAxis: {
          display: true,
        },
        yAxis: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      maintainAspectRatio: false,
      responsive: true,
      resizeDelay: 0,
    };

    setOptions(options);
  }, []);

  return (
    <Chart
      ref={chartRef}
      type="line"
      height="100%"
      data={data()}
      options={options}
    />
  );
};

export default KPILine;
