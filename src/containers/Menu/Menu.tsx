// Libs
import React, {Suspense} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

// Styles
import styles from './Menu.module.css';

// Components
import List from './List';

// Type definitions
import { MenuType } from './Menu.types';

// Constants
import testAttributes from "../../testAttributes";

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
    <div className={styles.Menu} data-testid={testAttributes.MENU_COMPONENT}>
      <button
        onClick={handleBackButtonClick}
        hidden={isBackButtonHidden}
        data-testid={testAttributes.BACK_BUTTON}
      >
        Back
      </button>
      <Suspense fallback={fallbackNode}>{routes}</Suspense>
      <div className={styles.Links}>
        <a
          href='https://github.com/corocoto/flappy-bird/blob/master/LICENSE'
          target='_blank'
          className={styles.License}
          rel='noopener noreferrer license'
          title='Link on the licence'
          data-testid={testAttributes.LICENSE_LINK}
        > </a>
        <a
          href='https://github.com/corocoto/flappy-bird'
          target='_blank'
          className={styles.Repo}
          rel='noopener noreferrer bookmark'
          title='Link on the repository'
          data-testid={testAttributes.REPO_LINK}
        > </a>
      </div>
    </div>
  )
}
export {Menu};
export default withRouter(Menu);
