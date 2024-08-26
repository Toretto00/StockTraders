"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PageContainer from "@/app/components/container/PageContainer";
// components
import SalesOverview from "@/app/components/dashboard/SalesOverview";
import YearlyBreakup from "@/app/components/dashboard/YearlyBreakup";
import MonthlyEarnings from "@/app/components/dashboard/MonthlyEarnings";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Stock {
  id: number;
  name: string;
  o: number;
  c: number;
}

const fakeStock: Stock[] = [
  { id: 1, name: "Apple", o: 310, c: 300 },
  { id: 2, name: "Meta", o: 140, c: 300 },
  { id: 3, name: "Microsoft", o: 235, c: 350 },
  { id: 4, name: "Google", o: 234, c: 205 },
  { id: 5, name: "SPOT", o: 368, c: 123 },
  { id: 6, name: "ABNB", o: 123, c: 300 },
  { id: 7, name: "SHOP", o: 478, c: 144 },
  { id: 8, name: "SONY", o: 543, c: 686 },
  { id: 9, name: "DBX", o: 234, c: 675 },
];

export default function Dashboard() {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={4}
              navigation
            >
              {fakeStock.map((item: Stock) => (
                <SwiperSlide>
                  <MonthlyEarnings stock={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <YearlyBreakup />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
