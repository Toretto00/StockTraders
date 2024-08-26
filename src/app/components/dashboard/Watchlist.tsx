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
import Image from "next/image";

interface Stock {
  id: number;
  name: string;
  o: number;
  c: number;
  fullname: string;
}

const Watchlist = ({ stock }: { stock: Stock }) => {
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

  return (
    <DashboardCard>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{}} mr="8px">
          <Avatar alt="stock" src={`/images/stocks/${stock.id}.png`} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography fontWeight="700">{stock.name}</Typography>
            <Typography fontWeight="700">${stock.c}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography fontWeight="300">{stock.fullname}</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
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
        </Box>
      </Box>
    </DashboardCard>
  );
};

export default Watchlist;
