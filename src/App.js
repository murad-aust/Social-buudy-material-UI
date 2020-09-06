import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import NoRoute from './Components/NoRoute/NoRoute';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core/';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from './Components/Detail/Detail';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



function App() {
  const classes = useStyles();
  return (
    <div className={classes.root} >


      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title} >
              Social Buddy
            </Typography >
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      

      <Router>
        <Switch>
          <Route path="/home" >
            <Home></Home>
          </Route>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route path="/post/:postId">
            <Detail></Detail>
          </Route>
          <Route path="*" >
            <NoRoute></NoRoute>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
