import React, { useState } from "react";
import {
  Menu as MenuIcon,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import { IoNotificationsOutline } from 'react-icons/io5';
import { PiMoonStars } from 'react-icons/pi';
import { BsSun } from 'react-icons/bs';
import FlexBetween from "../components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "../state/index";
import profileImage from "../assets/avatar.png";
import { AppBar, Toolbar, IconButton, Box, Button, Typography, Menu, MenuItem, useTheme, ListItemIcon, ListItemText } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';

function Navbar({ isSidebarOpen, setIsSidebarOpen }) {

    const dispatch = useDispatch();
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: '50px',
        backgroundColor: alpha(theme.palette.neutral.main, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.neutral.main, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '18ch',
            '&:focus': {
              width: '30ch',
            },
          },
        },
      }));
      

  return (
    <AppBar
        sx={{
            position: "static",
            background: "none",
            boxShadow: "none",
            filter: "blur"
        }}>

        <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* LEFT SIDE */}
            <FlexBetween>
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <MenuIcon />
                </IconButton>
            </FlexBetween>

            {/* RIGHT SIDE */}
            <FlexBetween gap="1rem">
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <IconButton onClick={() => dispatch(setMode())}>
                    {theme.palette.mode === "dark" ? (
                    <PiMoonStars size={22} />
                    ) : (
                    <BsSun size={22} />
                    )}
                </IconButton>
            
                <IconButton>
                    <IoNotificationsOutline size={22} />
                </IconButton>

                <FlexBetween>
                <Button
                  onClick={handleClick}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        textTransform: "none",
                        gap: "1rem",
                    }}>

                <Box
                    component="img"
                    alt="profile"
                    src={profileImage}
                    height="34px"
                    width="34px"
                    backgroundColor= "#ffffff"
                    borderRadius="50%"
                    sx={{ objectFit: "cover" }}
                />

                <Box textAlign="left">
                    <Typography
                    fontWeight="bold"
                    fontSize="0.85rem"
                    sx={{ color: theme.palette.neutral.main }}
                    >
                        Vihan Perera
                    </Typography>
                    <Typography
                    fontSize="0.75rem"
                    sx={{ color: theme.palette.neutral.main }}
                    >
                    Manager
                    </Typography>
                </Box>
                <ArrowDropDownOutlined
                  sx={{ color: theme.palette.neutral.main, fontSize: "25px" }}
                />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={isOpen}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }} 
                  sx={{ color: theme.palette.neutral.main}}
                >
                  <MenuItem onClick={handleClose} sx={{padding: '12px 16px', color: theme.palette.neutral.main}}>Profile Settings</MenuItem>
                  <MenuItem onClick={handleClose} sx={{padding: '12px 16px', borderBottom: '1px solid #E2E1E7', color: theme.palette.neutral.main}}>View Profile</MenuItem>
                  <MenuItem onClick={handleClose} sx={{padding: '12px 16px', marginTop: '4px', color: theme.palette.neutral.main}}>
                    <ListItemIcon>
                      <Groups2OutlinedIcon fontSize="medium"/>
                    </ListItemIcon>
                    <ListItemText sx={{marginLeft: '-2px'}}>Explore Creators</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={handleClose} sx={{padding: '12px 16px', color: theme.palette.neutral.main}}>
                    <ListItemIcon>
                      <FavoriteBorderOutlinedIcon fontSize="medium" />
                    </ListItemIcon>
                    <ListItemText sx={{marginLeft: '-2px'}}>Manage Membership</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={handleClose} sx={{padding: '12px 16px', borderBottom: '1px solid #E2E1E7', color: theme.palette.neutral.main}}>
                    <ListItemIcon>
                      <SendOutlinedIcon fontSize="medium" />
                    </ListItemIcon>
                    <ListItemText sx={{marginLeft: '-2px'}}>Invite Creators</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={handleClose} sx={{padding: '12px 16px', marginTop: '4px', color: theme.palette.neutral.main}}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar