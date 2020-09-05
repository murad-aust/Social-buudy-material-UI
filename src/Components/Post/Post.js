import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import './Post.css';

import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader, CardActionArea, Button, CardActions,Container
} from '@material-ui/core/';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

const Post = (props) => {
    const classes = useStyles();
    const {name, title, body, id} = props.post;
    const history = useHistory();
    const handleClick=(postId) => {
        history.push(`/post/${postId}`)}

    
    return (
        <div className={classes.root}>
             <Container fixed >
                 <div className = "grid">
                            <Card>
                                <CardActionArea>

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h4">
                                            {title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {body}
                                         </Typography>
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