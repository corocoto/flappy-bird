import React, {Suspense} from 'react';
import classes from './Menu.module.css';
import {Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import List from './List';
import {MenuType} from './Menu.types';

const Scene = React.lazy(() =>
  import(
    /* webpackChunkName: "SceneComponent" */
    /* webpackPreload: true */
    './Scene'
    )
);
const About = React.lazy(() =>
  import(
    /* webpackChunkName: "AboutComponent" */
    /* webpackPrefetch: true */
    './About'
    )
);


const Menu: MenuType = ({history}) => {
  const routes = (<Switch>
    <Route path='/game' component={Scene}/>
    <Route path='/author' component={About}/>
    <Route path='/' component={List}/>
  </Switch>);

  const handleBackButtonClick = (): void => history.goBack();

  const isBackButtonHidden = ['/', '/flappy-bird', '/flappy-bird/'].includes(history.location.pathname);

  const fallbackNode = <p>Loading...</p>;

  return (
    <div className={classes.Menu}>
      <button
        onClick={handleBackButtonClick}
        hidden={isBackButtonHidden}
      >
        Back
      </button>
      <Suspense fallback={fallbackNode}>{routes}</Suspense>
      <div className={classes.Links}>
        <a
          href='https://github.com/corocoto/flappy-bird/blob/master/LICENSE'
          target='_blank'
          className={classes.License}
          rel='noopener noreferrer license'
          title='Link on the licence'
        > </a>
        <a
          href='https://github.com/corocoto/flappy-bird'
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
