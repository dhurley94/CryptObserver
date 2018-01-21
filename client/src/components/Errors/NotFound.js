
import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from './lost.png';
const NotFound = () => (
    <div>
        <img src={PageNotFound} alt="LOST" style={{ display: 'block', margin: 'auto', position: 'relative' }} />
        <center><Link to="/">Return to Home Page</Link></center>
    </div>
);

export default NotFound;