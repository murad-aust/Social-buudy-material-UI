import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import './Post.css';

import {
    Grid,Box,
    Card,
    CardContent,
    Typography,
    CardHeader, CardActionArea, Button, CardActions,Container
} from '@material-ui/core/';


const useStyles = makeStyles({
    root: {
      
      width: '330px',
      float: 'left',
      boxradius: '10px', 
      margin: '20px 0px',
   
    },
  });

const Post = (props) => {
    const classes = useStyles();
    const {name, title, body, id} = props.post;
    const history = useHistory();
    const handleClick=(postId) => {
        history.push(`/post/${postId}`)}

    
    return (
        <div className={classes.root} style={{ width: 330, whiteSpace:'nowrap'}}>
             <Container fixed >
                 <div className = "grid">
                            <Card >
                                <CardActionArea >

                                    <CardContent >
                                        <Typography component="h4">
                                            {title}
                                        </Typography>
                                        
                                    <Box component="div" my={2} textOverflow="ellipsis" overflow="hiheritdden" bgcolor="background.paper">
                                        {body}
                                    </Box>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                   
                                    <Button size="small" color="primary" onClick={() => handleClick(id)}>
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                    </div> 
            </Container>

        </div>
    );
};

export default Post;