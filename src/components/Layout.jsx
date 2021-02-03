/* eslint-disable no-unused-vars */
import React from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotificationsIcon from '@material-ui/icons/Notifications';
import WebIcon from '@material-ui/icons/Web';
import StorageIcon from '@material-ui/icons/Storage';
import SearchIcon from '@material-ui/icons/Search';
import StoreIcon from '@material-ui/icons/Store';
import { grey } from '@material-ui/core/colors';
import Link from '@material-ui/core/Link';
import { Box, Button, Collapse, Hidden } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import logo from '../images/logo_royale.png';

import useAuth from '../hooks/useAuth';

// You can set the open drawer width here
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  // root: {
  //   display: 'flex',
  // },
  // appBar: {
  //   backgroundColor: 'white',
  //   color: 'black',
  //   zIndex: theme.zIndex.drawer + 1,
  //   transition: theme.transitions.create(['width', 'margin'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  // },
  // appBarShift: {
  //   marginLeft: drawerWidth,
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   transition: theme.transitions.create(['width', 'margin'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  // menuButton: {
  //   marginRight: theme.spacing(3),
  // },
  // hide: {
  //   display: 'none',
  // },
  // drawer: {
  //   width: drawerWidth,
  //   flexShrink: 0,
  //   whiteSpace: 'nowrap',
  // },
  // drawerOpen: {
  //   width: drawerWidth,
  //   transition: theme.transitions.create('width', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  // drawerClose: {
  //   transition: theme.transitions.create('width', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   overflowX: 'hidden',
  //   width: theme.spacing(7) + 1,
  //   [theme.breakpoints.up('sm')]: {
  //     width: theme.spacing(9) + 1,
  //   },
  // },
  // toolbar: {
  //   height: '55px',
  //   backgroundColor: 'white',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   ...theme.mixins.toolbar,
  // },
  // mainToolbar: theme.mixins.toolbar,
  // content: {
  //   flexGrow: 1,
  // },
  // drawerBox: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'space-between',
  //   height: '100%',
  // },
  // icon: {
  //   color: grey[400],
  //   fontSize: '2em',
  //   textAlign: 'center',
  // },
  // nested: {
  //   backgroundColor: grey[800],
  // },
  // menuLabel: {
  //   color: grey[400],
  //   fontSize: '1em',
  //   marginTop: '1em',
  // },
}));

export default function Layout({ ...props }) {
  const classes = useStyles();
  const { children } = props;
  const { signOut } = useAuth();
  //   const theme = useTheme();
  //   const [open, setOpen] = React.useState(false);
  //   const [openCollapse, setOpenCollapse] = React.useState(false);
  //   const { title } = useSelector((state) => state.title);
  //   const { t } = useTranslation();

  //   const handleDrawerOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleDrawerClose = () => {
  //     setOpen(false);
  //     setOpenCollapse(false);
  //   };

  //   const handleClick = () => {
  //     setOpen(true);
  //     setOpenCollapse(!openCollapse);
  // };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Link component={RouterLink} to="/" underline="none">
            <img src={logo} alt="logo-royale" style={{ height: '32px' }} />
          </Link>
          <Typography variant="h5" className={classes.title}>
            Wild Royale
          </Typography>
          <IconButton
            color="inherit"
            aria-label="logout"
            onClick={() => signOut()}
            edge="start"
          >
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Hidden xsDown>
            <Link component={RouterLink} to="/" underline="none">
              <Typography variant="h5" color="textPrimary" noWrap>
                {t(`PageTitle.${title}`)}
              </Typography>
            </Link>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <Link component={RouterLink} to="/" underline="none">
            <ListItem>
              <img src={logoFull} alt="logo-ftm" style={{ height: '30px' }} />
            </ListItem>
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Box className={classes.drawerBox}>
          <List>
            <Link component={RouterLink} to="/notification" underline="none">
              <ListItem button>
                <ListItemIcon>
                  <NotificationsIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText className={classes.menuLabel}>
                  Notification
                </ListItemText>
              </ListItem>
            </Link>

            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <WebIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText className={classes.menuLabel}>
                Follow The Market
              </ListItemText>
              {openCollapse ? (
                <ExpandLess style={{ color: grey[400] }} />
              ) : (
                <ExpandMore style={{ color: grey[400] }} />
              )}
            </ListItem>

            {/* This is the Follow The Market category submenu */}
      {/* <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {[
                  'Etude de marché',
                  'Etude de marché concurrentielle',
                  'Panel activité nationale',
                  'Panel activité métier et local',
                ].map((label) => (
                  <ListItem button className={classes.nested} key={label}>
                    <ListItemText className={classes.menuLabel}>
                      {label}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Collapse>

            <Link component={RouterLink} to="/data" underline="none">
              <ListItem button>
                <ListItemIcon>
                  <StorageIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText className={classes.menuLabel}>
                  Follow The Data
                </ListItemText>
              </ListItem>
            </Link>

            <Link component={RouterLink} to="/map" underline="none">
              <ListItem button>
                <ListItemIcon>
                  <SearchIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText className={classes.menuLabel}>
                  Follow The Map
                </ListItemText>
              </ListItem>
            </Link>

            <Link component={RouterLink} to="/mall" underline="none">
              <ListItem button>
                <ListItemIcon>
                  <StoreIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText className={classes.menuLabel}>
                  Follow The Mall
                </ListItemText>
              </ListItem>
            </Link>
          </List>

          <List>
            <Divider />
            <Link component={RouterLink} to="/user" underline="none">
              <ListItem button>
                <ListItemIcon>
                  <PersonIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText className={classes.menuLabel}>
                  {t('MyAccount.1')}
                </ListItemText>
              </ListItem>
            </Link>

            <Link component={RouterLink} to="/login" underline="none">
              <ListItem button>
                <ListItemIcon>
                  <PowerSettingsNewIcon
                    className={classes.icon}
                    onClick={() => signOut()}
                  />
                </ListItemIcon>
                <ListItemText className={classes.menuLabel}>
                  {t('Logout.1')}
                </ListItemText>
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>  */}
      <main className={classes.content}>
        <div className={classes.mainToolbar} />
        {children}
      </main>
    </div>
  );
}
