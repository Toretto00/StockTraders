import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  IconArrowDownRight,
  IconCurrencyDollar,
  IconArrowUpLeft,
} from "@tabler/icons-react";
import DashboardCard from "@/app/components/shared/DashboardCard";

interface Stock {
  id: number;
  name: string;
  o: number;
  c: number;
}

const MonthlyEarnings = ({ stock }: { stock: Stock }) => {
  // chart color
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;
  const secondarylight = "#f5fcff";
  const errorlight = "#fdede8";
  const successlight = theme.palette.success.light;

  const newStock = {
    ...stock,
    r: ((stock.c - stock.o) / stock.o) * 100,
  };

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: "area",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      // foreColor: newStock.r < 0 ? "red" : "green",
      toolbar: {
        show: false,
      },
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },
    stroke: {
      curve: "straight",
      width: 2,
      colors: newStock.r < 0 ? ["#FA896B"] : ["#4FBFA6"],
    },
    fill: {
      // colors: newStock.r < 0 ? "red" : "green",
      type: "solid",
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
    },
  };
  const seriescolumnchart: any = [
    {
      name: "",
      color: newStock.r < 0 ? errorlight : successlight,
      data: [25, 66, 20, 40, 12, 58, 20],
    },
  ];

  return (
    <DashboardCard
      title={stock.name}
      action={<Avatar alt="stock" src={`/images/stocks/${stock.id}.png`} />}
      footer={
        <Chart
          options={optionscolumnchart}
          series={seriescolumnchart}
          type="area"
          height={60}
        />
      }
    >
      <>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontWeight="300" mt="-20px">
            Total shares
          </Typography>
          <Typography fontWeight="700" mt="-20px">
            ${stock.c}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography fontWeight="300">Total return</Typography>
          <Stack direction="row" spacing={1} my={1} alignItems="center">
            {newStock.r < 0 ? (
              <Avatar sx={{ bgcolor: errorlight, width: 27, height: 27 }}>
                <IconArrowDownRight width={20} color="#FA896B" />
              </Avatar>
            ) : (
              <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
                <IconArrowUpLeft width={20} color="#39B69A" />
              </Avatar>
            )}
            <Typography
              variant="subtitle2"
              fontWeight="600"
              color={newStock.r < 0 ? "#FA896B" : "#4FBFA6"}
            >
              {newStock.r < 0
                ? newStock.r.toFixed(2)
                : (newStock.r - 100).toFixed(2)}
              %
            </Typography>
          </Stack>
        </Box>
      </>
    </DashboardCard>
  );
};

export default MonthlyEarnings;
