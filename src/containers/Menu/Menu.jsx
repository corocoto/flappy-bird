import React, {Suspense} from 'react';
import classes from './Menu.module.css';
import {Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import List from './List/List';

const Scene = React.lazy(() => 
    import(
        /* webpackChunkName: "SceneComponent" */ './Scene/Scene'
    )
);
const About = React.lazy(() => 
    import(
        /* webpackChunkName: "AboutComponent" */ './About/About'
    )
);


const Menu = (props) => {
    const routes = (<Switch>
        <Route path='/game' component={Scene}/>
        <Route path='/author' component={About}/>
        <Route path='/' component={List}/>
    </Switch>);

    return (
        <div className={classes.Menu}>
            <button
                onClick={() => props.history.goBack()}
                hidden={props.history.location.pathname === '/' ||
                props.history.location.pathname === '/flappy-bird' ||
                props.history.location.pathname === '/flappy-bird/'}
            >Back
            </button>
            <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
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