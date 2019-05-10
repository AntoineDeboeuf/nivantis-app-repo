import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link as RouterLink } from 'react-router-dom'
import DrawerBase from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home'
import DialpadRounded from '@material-ui/icons/DialpadRounded';
import Pharmacies from '@material-ui/icons/LocalHospital'
import ProduitsIcon from '@material-ui/icons/Store'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

const pages = [
  {
    name: 'Accueil',
    icon: <Home />,
    route: '/'
  }, {
    name: 'Calculatrice',
    icon: <DialpadRounded />,
    route: '/calculatrice'
  }, {
    name: 'Pharmacies',
    icon: <Pharmacies />,
    route: '/pharmacies'
  },
  {
    name: 'Produits',
    icon: <ProduitsIcon />,
    route: '/produits'
  }
]

const getLinkComponent = path => props => (
  <RouterLink to={path} {...props} />
)

const Drawer = (props) => {

  const { open, handleDrawerClose, classes, theme } = props

  return (
    <DrawerBase
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        onBackdropClick={handleDrawerClose}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {pages.map(page => (
            <ListItem button key={page.name} component={getLinkComponent(page.route)} onClick={handleDrawerClose}>
              <ListItemIcon>
                {page.icon}
              </ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </DrawerBase>
  )
}

export default withStyles(styles, { withTheme: true })(Drawer)