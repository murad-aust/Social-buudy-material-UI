import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 500,
    },
  });

const PostContent = (props) => {

    const {title, body}= props.post;
    const classes = useStyles();
    return (
        <div className={classes.root}>


      <Typography variant="h4" gutterBottom>
      {title}
      </Typography>
      
      <Typography variant="body1" gutterBottom>
      {body}
      </Typography>
      
        </div>
    );
};

export default PostContent;