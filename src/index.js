import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import CommentBox from './CommentBox';
ReactDOM.render(<CommentBox
    url='http://localhost:3001/api/comments'
    pollInterval={5000} />,
    document.getElementById('root'));
