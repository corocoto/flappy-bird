import React from 'react';
import classes from './About.module.css';
const About = (props) => {
    return (
        <div className={classes.About}>
            <h1>Author</h1>
            <p>This game was created by <a
                href='https://github.com/corocoto'
                target='_blank'
                rel='noopener noreferrer author'
            >
                corocoto (Artem Gusev)
            </a>
            </p>
        </div>
    );
}

export default About;