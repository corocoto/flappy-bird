// Libs
import React from 'react';

// Images
import Logo from '../../assets/images/logo.png';

// Styles
import styles from './Poster.module.css';

// Constants
import testAttributes from "../../testAttributes";

const Poster = () => {
  return (
    <div className={styles.Poster} data-testid={testAttributes.POSTER_COMPONENT}>
      <img src={Logo} alt="Logo" loading="lazy"/>
    </div>
  );
};

export default Poster;
