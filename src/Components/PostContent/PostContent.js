import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '100%',
      margin: '20px',
      padding: '20px',
      textAlign: 'center'
     
      
    },
  });

const PostContent = (props) => {

    const {title, body}= props.post;
    const classes = useStyles();
    return (

     
        <div className={classes.root} >

      <CssBaseline />
      <Container fixed>
      <Typography variant="h4" >
      {title}
      </Typography>
      
      <Typography variant="body1"  >
      {body}
      </Typography>
      
      </Container>

      
      
        </div>
    );
};

export default PostContent;