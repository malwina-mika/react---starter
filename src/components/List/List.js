import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js'

class List extends React.Component {
  state = {
  columns: this.props.columns || [],
}
  static propTypes = {
    title: PropTypes.node.isRequired,
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
        {this.state.columns.map(({key, ...columnProps}) => (
          <Column key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
        </div>
      </section>
    )
  }
}

export default List;
