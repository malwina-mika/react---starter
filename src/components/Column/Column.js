import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }
  static propTypes = {
    title: PropTypes.string,
  }


  render() {
    return (

      <section className={styles.component}>
        <h3 className={styles.title}> {this.props.title} </h3>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addColumn(title)}/>
        </div>
      </section>

    )
  }
}

export default Column;
