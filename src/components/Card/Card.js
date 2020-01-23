import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import {listData} from '../../data/dataStore';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }


  render() {
    return (

      <div className={styles.component}>
        <h5 className={listData.columns.cards}></h5>
      </div>

    )
  }
}

export default Card;
