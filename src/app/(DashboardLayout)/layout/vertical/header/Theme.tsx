import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import {
  Box,
  BoxProps,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";

import { IconBulb } from "@tabler/icons-react";

import { Stack } from "@mui/system";

import { useSelector, useDispatch } from "@/store/hooks";
import { setDarkMode } from "@/store/customizer/CustomizerSlice";
import { AppState } from "@/store/store";

const Theme = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const customizer = useSelector((state: AppState) => state.customizer);

  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const dispatch = useDispatch();

  const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
    boxShadow: theme.shadows[8],
    padding: "20px",
    cursor: "pointer",
    justifyContent: "center",
    display: "flex",
    transition: "0.1s ease-in",
    border: "1px solid rgba(145, 158, 171, 0.12)",
    "&:hover": {
      transform: "scale(1.05)",
    },
  }));

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          color: anchorEl2 ? "primary.main" : "text.secondary",
        }}
        onClick={handleClick2}
      >
        <IconBulb size="21" stroke="1.5" />
      </IconButton>
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <Stack direction="row" py={2} px={4} alignItems="center">
          <Typography variant="h6">Theme</Typography>
        </Stack>
        <MenuItem sx={{ py: 2, px: 4 }}>
          <StyledBox
            onClick={() => dispatch(setDarkMode("light"))}
            display="flex"
            gap={1}
          >
            <WbSunnyTwoToneIcon
              color={customizer.activeMode === "light" ? "primary" : "inherit"}
            />
            Light
          </StyledBox>
        </MenuItem>
        <MenuItem sx={{ py: 2, px: 4 }}>
          <StyledBox
            onClick={() => dispatch(setDarkMode("dark"))}
            display="flex"
            gap={1}
          >
            <DarkModeTwoToneIcon
              color={customizer.activeMode === "dark" ? "primary" : "inherit"}
            />
            Dark
          </StyledBox>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Theme;
