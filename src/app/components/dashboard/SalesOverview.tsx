import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import DashboardCard from "@/app/components/shared/DashboardCard";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesOverview = () => {
  // select
  const [month, setMonth] = React.useState("daily");

  const handleChange = (event: any) => {
    setMonth(event.target.value);
  };

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: "area",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      zoom: {
        autoScaleYaxis: true,
      },
      height: 370,
    },
    colors: [primary, secondary],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "60%",
        columnWidth: "42%",
        borderRadius: [6],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },

    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      tickAmount: 4,
    },
    xaxis: {
      categories: [
        "16/08",
        "17/08",
        "18/08",
        "19/08",
        "20/08",
        "21/08",
        "22/08",
        "23/08",
      ],
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart: any = [
    {
      name: "$",
      data: [355, 390, 300, 350, 390, 180, 355, 390],
    },
    // {
    //   name: "Expense this month",
    //   data: [280, 250, 325, 215, 250, 310, 280, 250],
    // },
  ];

  return (
    <DashboardCard
      title="Apple inc"
      subtitle="AAPL"
      action={
        <Select
          labelId="month-dd"
          id="month-dd"
          value={month}
          size="small"
          onChange={handleChange}
        >
          <MenuItem value={"daily"}>Daily</MenuItem>
          <MenuItem value={"monthly"}>Monthly</MenuItem>
          <MenuItem value={"yearly"}>Yearly</MenuItem>
          <MenuItem value={"all"}>All</MenuItem>
        </Select>
      }
    >
      <Chart
        options={optionscolumnchart}
        series={seriescolumnchart}
        type="area"
        height={370}
        width={"100%"}
      />
    </DashboardCard>
  );
};

export default SalesOverview;
