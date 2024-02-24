import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    PieChartOutlined,
    HelpOutlineOutlined,
    SettingsOutlined,
    TrendingUpOutlined,
  } from "@mui/icons-material";
import { GiBattleship } from 'react-icons/gi';
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import SimpleBar from 'simplebar-react';
import '../../node_modules/simplebar-react/dist/simplebar.min.css';
import '../../src/customScrollbar.css';

const navItems = [
    {
        text: "Main Boards",
        icon: null,
    },
    {
      text: "Dashboard",
      icon: <HomeOutlined />,
    },
    {
      text: "Performance",
      icon: <TrendingUpOutlined />,
    },
    {
      text: "Client Facing",
      icon: null,
    },
    {
      text: "Products",
      icon: <ShoppingCartOutlined />,
    },
    {
      text: "Customers",
      icon: <Groups2Outlined />,
    },
    {
      text: "Transactions",
      icon: <ReceiptLongOutlined />,
    },
    {
      text: "Sales",
      icon: null,
    },
    {
      text: "Daily",
      icon: <TodayOutlined />,
    },
    {
      text: "Monthly",
      icon: <CalendarMonthOutlined />,
    },
    {
      text: "Breakdown",
      icon: <PieChartOutlined />,
    },
    {
      text: "Settings",
      icon: null,
    },
    {
      text: "Admin",
      icon: <AdminPanelSettingsOutlined />,
    },
    {
      text: "Help guide",
      icon: <HelpOutlineOutlined />,
    },
    {
      text: "Settings",
      icon: <SettingsOutlined />,
    },
  ];

  const Sidebar = ({
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile,
    setActiveItemName,
  }) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();
  
    useEffect(() => {
      setActive(pathname.substring(1));
    }, [pathname]);
  
    return (
      <Box component="nav">
        {isSidebarOpen && (
          <Drawer
            open={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            variant="persistent"
            anchor="left"
            sx={{
              width: drawerWidth,
              "& .MuiDrawer-paper": {
                color: theme.palette.neutral.main,
                backgroundColor: theme.palette.primary.main,
                boxSixing: "border-box",
                borderWidth: isNonMobile ? 0 : "2px",
                width: drawerWidth,
              },
            }}
          >
            <SimpleBar style={{ maxHeight: 720}}>
            <Box width="100%" px={'12px'}>
              <Box mt={'0.8rem'} alignItems={'center'}>
                <FlexBetween>
                  <Box display="flex" alignItems="center" gap="0.2rem" p={0.5}>
                    <Typography color={'#FF7518'}>
                      <GiBattleship size={42}/>
                    </Typography>
                    <Typography variant="h3" fontWeight="bold" sx={{color: theme.palette.secondary.default}}>
                      XBroker
                    </Typography>
                   
                  </Box>
                  {!isNonMobile && (
                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                      <ChevronLeft />
                    </IconButton>
                  )}
                </FlexBetween>
              </Box>
              <Divider />
              <List sx={{mt: '-8px'}}>
                {navItems.map(({ text, icon }) => {
                  if (!icon) {
                    return (
                      <Typography key={text} sx={{ m: "2rem 0 0.8rem", textAlign: 'left'}}>
                        {text}
                      </Typography>
                    );
                  }
                  const lcText = text.toLowerCase();
  
                  return (
                    <ListItem key={text} disablePadding sx={{mt: '4px'}}>
                      <ListItemButton
                        onClick={() => {
                          navigate(`/${lcText}`);
                          setActive(lcText);
                          setActiveItemName(text);
                        }}
                        sx={{
                            borderRadius: '4px',
                            height: '36px',
                            backgroundColor:
                            active === lcText
                              ? theme.palette.secondary.main
                              : "transparent",
                          color:
                            active === lcText
                              ? theme.palette.neutral.default
                              : theme.palette.neutral.main,

                          '&:hover': {
                             backgroundColor: active === lcText ? theme.palette.secondary.main : "",
                            },
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            color:
                              active === lcText
                                ? theme.palette.neutral.default
                                : theme.palette.neutral.main,
                          }}
                        >
                          {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} 
                        sx={{
                            ml: "-24px",
                            color:
                              active === lcText
                                ? theme.palette.neutral.default
                                : theme.palette.neutral.main
                            }}
                        />
                        {active === lcText && (
                          <ChevronRightOutlined sx={{ ml: "auto"}} />
                        )}

                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
              </SimpleBar>
          </Drawer>
        )}
      </Box>
    );
  };
  
  export default Sidebar;