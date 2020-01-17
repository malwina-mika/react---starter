import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    image: PropTypes.string,
    description: settings.defaultListDescription,
    columns: PropTypes.array,
  }
  static defaultProps = {
    columns: [{title: 'Cat'}, {title: 'Dog'}, {title: 'Parrot'}],
  }
  render() {
    return (

      <section className={styles.component}>
        <Hero titleText={this.props.title} imageSrc={this.props.image} />
        <div className={styles.description}>
            <h3>{this.props.description}</h3>
        </div>
        <div className={styles.columns}>
          {this.props.columns.map(item => (
            <Column key={item.title} titleColumn={item.title}/>)
          )}
        </div>
      </section>
    )
  }
}

export default List;
