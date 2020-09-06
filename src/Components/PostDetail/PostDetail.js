import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '95%',
      margin: '30px',
      textAlign: 'center',
      boxShadow: '5px 5px 15px lightgray',
      border: 'none',
      borderRadius: '10px',
      padding: "20px",
      paddingBottom: '10px'
     
      
    },
  });

const PostDetail = (props) => {

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

export default PostDetail;