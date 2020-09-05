import React, { useEffect, useState }  from 'react';

const Comment = (props) => {
    
    const {name, email, body}= props.comment;
    return (
        <div>
          Name: {name}
        </div>
    );
};

export default Comment;