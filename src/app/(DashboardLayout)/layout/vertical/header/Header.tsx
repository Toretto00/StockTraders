import { styled } from "@mui/material/styles";

import {
  InputBase,
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  useMediaQuery,
  Paper,
} from "@mui/material";

import {
  toggleSidebar,
  toggleMobileSidebar,
} from "@/store/customizer/CustomizerSlice";
import { useSelector, useDispatch } from "@/store/hooks";
import { AppState } from "@/store/store";

import { IconMenu2 } from "@tabler/icons-react";
import Notifications from "./Notification";
import { IconSearch } from "@tabler/icons-react";

import Profile from "./Profile";
import Theme from "./Theme";

const Header = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

  // drawer
  const customizer = useSelector((state: AppState) => state.customizer);
  const dispatch = useDispatch();

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: theme.palette.background.paper,
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    [theme.breakpoints.up("lg")]: {
      minHeight: customizer.TopbarHeight,
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={
            lgUp
              ? () => dispatch(toggleSidebar())
              : () => dispatch(toggleMobileSidebar())
          }
        >
          <IconMenu2 size="20" />
        </IconButton>

        <Paper
          component="form"
          sx={{ paddingInline: "8px", minWidth: "40%", display: "flex" }}
        >
          <IconButton type="button" aria-label="search">
            <IconSearch size={16} />
          </IconButton>
          <InputBase
            placeholder='Press "⌘" to search for various stocks'
            sx={{ flex: "1" }}
          />
        </Paper>

        <Box flexGrow={1} />

        <Stack spacing={1} direction="row" alignItems="center">
          <Theme />
          <Notifications />
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;
