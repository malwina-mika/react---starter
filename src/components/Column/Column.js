import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
// import Creator from '../Creator/Creator.js';
// import {settings} from '../../data/dataStore';
// import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.node.isRequired,
  }

  render() {
    const {title} = this.props;

    return (

      <section className={styles.component}>
        <h3 className={styles.title}> {title} <span className={styles.icon}> <Icon name={this.props.icon} /> </span></h3>

        {/*
        {this.state.cards.map(({key, ...cardProps}) => (
          <Card key={key} {...cardProps} />
        ))}

        <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          */}
      </section>

    );
  }
}

export default Column;
