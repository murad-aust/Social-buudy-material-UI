import React, { useEffect, useState }  from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '30px',
   
   
  },
  paper: {
    padding: theme.spacing(2),
    width:'800px',
    margin: 'auto',
    boxShadow: '5px 5px 15px lightgray',
    border: 'none',
    borderRadius: '10px',
    padding: "20px",
    paddingBottom: '10px'
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    borderRadius: '50%',
  },
}));

const Comment = (props) => {
  const classes = useStyles();

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => setUsers(data.results))
  }, [])

    
    const {name, email, body}= props.comment;
    return (
      <div className={classes.root}>
      
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              {
                users.map(user => <img className={classes.img} alt="complex" src={user.picture.large} />)
              }
              
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                 Name: {name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                 Email: {email}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {body}
                </Typography>
              </Grid>
              
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    </div>
    );
};

export default Comment;