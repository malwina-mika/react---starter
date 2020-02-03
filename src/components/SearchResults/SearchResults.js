import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';


class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
  }

  render() {
    const {cards} = this.props;

    return (

      <section className={styles.component}>

        <h3 className={styles.title}>SEARCHING RESULTS</h3>
        <div className={styles.cards}>
          {cards.map(cardProps => (
            <Card key={cardProps.id} {...cardProps} />
          ))}
        </div>

      </section>

    );
  }
}

export default SearchResults;
