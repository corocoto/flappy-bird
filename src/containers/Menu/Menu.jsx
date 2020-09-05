import React from 'react';
import classes from './Menu.module.css';
import {Route, Switch} from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';
import {withRouter} from 'react-router-dom';

const asyncSceneLoad = asyncComponent(() => import('./Scene/Scene'));
const asyncAboutLoad = asyncComponent(() => import('./About/About'));
const asyncListLoad = asyncComponent(() => import('./List/List'));


const Menu = (props) => {
    return (
        <div className={classes.Menu}>
            <button
                onClick={() => props.history.goBack()}
                hidden={props.history.location.pathname === '/' || props.history.location.pathname === '/flappy-bird' || props.history.location.pathname === '/flappy-bird/'}
            >Back</button>
            <Switch>
                <Route path='/game' component={asyncSceneLoad}/>
                <Route path='/author' component={asyncAboutLoad}/>
                <Route path='/' component={asyncListLoad}/>
            </Switch>
            <div className={classes.Links}>
                <a
                    href='https://github.com/CreativeRusBear/FlappyBird/blob/master/LICENSE'
                    target='_blank'
                    className={classes.License}
                    rel='noopener noreferrer license'
                    title='Link on the licence'
                > </a>
                <a
                    href='https://github.com/CreativeRusBear/FlappyBird'
                    target='_blank'
                    className={classes.Repo}
                    rel='noopener noreferrer bookmark'
                    title='Link on the repository'
                > </a>
            </div>
        </div>
    )
}
export {Menu};
export default withRouter(Menu);