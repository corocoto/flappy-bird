import React from 'react';
import Logo from '../../assets/images/logo.png';
import classes from './Poster.module.css';

const Poster = () => {
    return (
        <div className={classes.Poster}>
            <img src={Logo} alt="Logo" loading="lazy"/>
        </div>
    );
};

export default Poster;
