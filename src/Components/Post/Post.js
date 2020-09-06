import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';

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
      minHeight: '120px'
      
   
    },
  });

const Post = (props) => {
    const classes = useStyles();
    const {name, title, body, id} = props.post;
    const history = useHistory();
    const handleClick=(postId) => {
        history.push(`/post/${postId}`)}

    
    return (
        <div className={classes.root}  >
             <Container fixed >
             
                            <Card >
                                <CardActionArea style={{background:'#F0FFF0',height:'130px', textOverflow: "ellipsis", overflow: 'hidden'}}>

                                    <CardContent >
                                        <Typography component="h2">
                                            {title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        {body}
                                         </Typography>
                                        
                                   
                                    </CardContent>
                                </CardActionArea>
                                <CardActions style={{background:'#F0FFF0' }}>
                                   
                                    <Button size="small" color="secondary" onClick={() => handleClick(id)}>
                                        See More
                                    </Button>
                                </CardActions>
                            </Card>
                    
            </Container>

        </div>
    );
};

export default Post;