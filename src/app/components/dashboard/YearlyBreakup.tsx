import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { IconArrowUpLeft, IconPlus } from "@tabler/icons-react";

import DashboardCard from "@/app/components/shared/DashboardCard";
import { Box, Button, IconButton } from "@mui/material";
import Scrollbar from "../custom-scroll/Scrollbar";
import Image from "next/image";
import Watchlist from "./Watchlist";

interface Stock {
  id: number;
  name: string;
  o: number;
  c: number;
  fullname: string;
}

const fakeStock: Stock[] = [
  { id: 1, name: "Apple", o: 310, c: 300, fullname: "Apple" },
  { id: 2, name: "Meta", o: 140, c: 300, fullname: "Facebook" },
  { id: 3, name: "Microsoft", o: 235, c: 350, fullname: "Microsoft" },
  { id: 4, name: "Google", o: 234, c: 205, fullname: "Google" },
  { id: 5, name: "SPOT", o: 368, c: 123, fullname: "Spotify" },
  { id: 6, name: "ABNB", o: 123, c: 300, fullname: "Airbnb" },
  { id: 7, name: "SHOP", o: 478, c: 144, fullname: "Shopify" },
  { id: 8, name: "SONY", o: 543, c: 686, fullname: "Playstation" },
  { id: 9, name: "DBX", o: 234, c: 675, fullname: "Dropbox Inc" },
];

const YearlyBreakup = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = "#ecf2ff";
  const successlight = theme.palette.success.light;

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: "donut",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 155,
    },
    colors: [primary, primarylight, "#F9F9FD"],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: "75%",
          background: "transparent",
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  };
  const seriescolumnchart: any = [38, 40, 25];

  return (
    <DashboardCard
      title="My watchlist"
      action={
        <Button sx={{ backgroundColor: "transparent" }}>
          <IconButton>
            <IconPlus />
          </IconButton>
        </Button>
      }
    >
      <Scrollbar sx={{ height: "410px" }}>
        {fakeStock.map((item) => (
          <Box key={item.id}>
            <Watchlist stock={item} />
          </Box>
        ))}
      </Scrollbar>
    </DashboardCard>
  );
};

export default YearlyBreakup;
