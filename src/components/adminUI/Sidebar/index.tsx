/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
// import { menuStructure } from "./structure1";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, CSSObject, Collapse, CssBaseline, Divider, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Theme, Toolbar, Typography, styled, useTheme } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import { hasChildren } from "../../../utils/adminUtils";
import menuStructure from "./structure";
import DarkModeToggle from "../../commonUI/GlobalDarkMode";
import { Link, useLocation } from "react-router-dom";
import { useLoading } from "../../commonUI/GlobalLoader/LoadingProvider";
// import List from '@mui/material/List';
import { useTranslation } from "react-i18next"
import AppBreadcrumb from "../AppBreadcrumb";



const drawerWidth = 300;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);





export default function Sidebar({children}: any) {
    const [open, setOpen] = useState(true);
    const [paths, setPaths] = useState<string[]>([]);
    const theme = useTheme();
    const { pathname }= useLocation()
    // const { loading, setLoading } = useLoading();
    // setLoading(true)
    useEffect(()=>{
      setPaths(pathname.split("/"))
        // setTimeout(() => {
        //     setLoading(false)
        // }, 1500);
    },[pathname])
    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };
  return <>
 <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <AppBreadcrumb paths={paths}/>
          {/* <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "larger",
            fontWeight: "500",
          }}>
        Insta Daftra
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
  {
  menuStructure.map((item: any, key: any) => <MenuItem key={key} item={item} open={open} />)}
  </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  </>
}

const MenuItem = ({ item, open }: any) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <List><Component item={item} open={open} /></List>;
};

const SingleLevel = ({ item, open }: any) => {
  const { t } = useTranslation()
  return (
      <Link
      to={item.to}>
    <ListItemButton
    sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}>
         <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                      {/* <AppIcon icon={item.icon} />
                  <ThisIcon /> */}
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={t(`sidebar.${item.title}`)} sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
                </Link>
  );
};


const MultiLevel = ({ item, open }: any) => {
  const { items: children } = item;
  const [expanded, setExpanded] = useState<boolean>(false)
  const { t } = useTranslation()

  const handleClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <React.Fragment>
       {/* <Link
      to={item.to}> */}
      <ListItemButton onClick={handleClick}
           sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}>
       <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {/* <AppIcon icon={item.icon} />
                  <ThisIcon /> */}
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={t(`sidebar.${item.title}`)} sx={{ opacity: open ? 1 : 0 }} />
                <ListItemIcon
                sx={{
                    minWidth: 0,
                    display: open ? "flex" : "none",
                    justifyContent: 'center',
                  }}>

        {expanded ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
                </ListItemIcon>
      </ListItemButton>
      {/* </Link> */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child: any, key: any) => (
            <MenuItem key={key} item={child} open={open} />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};
