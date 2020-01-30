import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';


class Column extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.node.isRequired,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {title, cards, addCard} = this.props;

    return (

      <section className={styles.component}>
  
        <h3 className={styles.title}> {title} <span className={styles.icon}> <Icon name={this.props.icon} /> </span></h3>
        <div className={styles.cards}>
          {cards.map(cardProps => (
            <Card key={cardProps.id} {...cardProps} />
          ))}
        </div>

        <Creator text={settings.cardCreatorText} action={addCard}/>

      </section>

    );
  }
}

export default Column;
