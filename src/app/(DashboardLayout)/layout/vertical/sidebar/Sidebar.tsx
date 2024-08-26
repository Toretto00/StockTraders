import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import SidebarItems from "./SidebarItems";
import Logo from "../../shared/logo/Logo";
import { useSelector, useDispatch } from "@/store/hooks";
import {
  hoverSidebar,
  toggleMobileSidebar,
} from "@/store/customizer/CustomizerSlice";
import Scrollbar from "@/app/components/custom-scroll/Scrollbar";
import { Profile } from "./SidebarProfile/Profile";
import { AppState } from "@/store/store";
import { Divider, Typography } from "@mui/material";
import SidebarBottomItems from "./SidebarBottomItems";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {
  IconArrowDownRight,
  IconCurrencyDollar,
  IconArrowUpLeft,
} from "@tabler/icons-react";

const Sidebar = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.down("lg"));
  const customizer = useSelector((state: AppState) => state.customizer);
  const dispatch = useDispatch();
  const theme = useTheme();
  const toggleWidth =
    customizer.isCollapse && !customizer.isSidebarHover
      ? customizer.MiniSidebarWidth
      : customizer.SidebarWidth;

  const successlight = theme.palette.success.light;

  const onHoverEnter = () => {
    if (customizer.isCollapse) {
      dispatch(hoverSidebar(true));
    }
  };

  const onHoverLeave = () => {
    dispatch(hoverSidebar(false));
  };

  return (
    <>
      {!lgUp ? (
        <Box
          sx={{
            zIndex: 100,
            width: toggleWidth,
            flexShrink: 0,
            ...(customizer.isCollapse && {
              position: "absolute",
            }),
          }}
        >
          {/* ------------------------------------------- */}
          {/* Sidebar for desktop */}
          {/* ------------------------------------------- */}
          <Drawer
            anchor="left"
            open
            onMouseEnter={onHoverEnter}
            onMouseLeave={onHoverLeave}
            variant="permanent"
            PaperProps={{
              sx: {
                transition: theme.transitions.create("width", {
                  duration: theme.transitions.duration.shortest,
                }),
                width: toggleWidth,
                boxSizing: "border-box",
              },
            }}
          >
            {/* ------------------------------------------- */}
            {/* Sidebar Box */}
            {/* ------------------------------------------- */}
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* ------------------------------------------- */}
              {/* Logo */}
              {/* ------------------------------------------- */}
              <Box>
                <Box px={3}>
                  <Logo />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "24px 24px",
                    margin: "0 24px",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: "12px", fontWeight: "300" }}>
                      Total investment
                    </Typography>
                    <Typography>$5380,90</Typography>
                  </Box>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Avatar
                      sx={{ bgcolor: successlight, width: 16, height: 16 }}
                    >
                      <IconArrowUpLeft width={20} color="#39B69A" />
                    </Avatar>
                    <Typography
                      variant="subtitle2"
                      fontWeight="600"
                      color={"#4FBFA6"}
                    >
                      18.10%
                    </Typography>
                  </Stack>
                </Box>
                <Scrollbar sx={{ height: "100%" }}>
                  {/* ------------------------------------------- */}
                  {/* Sidebar Items */}
                  {/* ------------------------------------------- */}
                  <SidebarItems />
                </Scrollbar>
                {/* <Profile /> */}
              </Box>
              <Box>
                <Divider />
                <SidebarBottomItems />
              </Box>
            </Box>
          </Drawer>
        </Box>
      ) : (
        <Drawer
          anchor="left"
          open={customizer.isMobileSidebar}
          onClose={() => dispatch(toggleMobileSidebar())}
          variant="temporary"
          PaperProps={{
            sx: {
              width: customizer.SidebarWidth,

              // backgroundColor:
              //   customizer.activeMode === 'dark'
              //     ? customizer.darkBackground900
              //     : customizer.activeSidebarBg,
              // color: customizer.activeSidebarBg === '#ffffff' ? '' : 'white',
              border: "0 !important",
              boxShadow: (theme: any) => theme.shadows[8],
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* ------------------------------------------- */}
            {/* Logo */}
            {/* ------------------------------------------- */}
            <Box>
              <Box px={3}>
                <Logo />
              </Box>
              <Box
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "24px 24px",
                  margin: "0 24px",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "12px", fontWeight: "300" }}>
                    Total investment
                  </Typography>
                  <Typography>$5380,90</Typography>
                </Box>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Avatar sx={{ bgcolor: successlight, width: 16, height: 16 }}>
                    <IconArrowUpLeft width={20} color="#39B69A" />
                  </Avatar>
                  <Typography
                    variant="subtitle2"
                    fontWeight="600"
                    color={"#4FBFA6"}
                  >
                    18.10%
                  </Typography>
                </Stack>
              </Box>
              <Scrollbar sx={{ height: "100%" }}>
                {/* ------------------------------------------- */}
                {/* Sidebar Items */}
                {/* ------------------------------------------- */}
                <SidebarItems />
              </Scrollbar>
              {/* <Profile /> */}
            </Box>
            <Box>
              <Divider />
              <SidebarBottomItems />
            </Box>
          </Box>
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
