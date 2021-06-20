import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './List.module.css';

const List = () => (
    <div className={classes.List}>
        <button>
            <NavLink to='/game'>Play</NavLink>
        </button>
        <button>
            <NavLink to='/author'>Author</NavLink>
        </button>
    </div>
);

export default List;
