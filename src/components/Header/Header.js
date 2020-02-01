import React from 'react';
import styles from './Header.scss';
import {NavLink, Link} from 'react-router-dom';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import Search from '../Search/Search';
import Container from '../Container/Container';

class Header extends React.Component {
  render() {
    const {icon} = settings.header;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name={icon}/>
            </Link>
            <Search/>
          </div>
          <nav>
            <NavLink exact to='/' activeClassName='active'>Home</NavLink>
            <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
            <NavLink exact to='/FAQ' activeClassName='active'>FAQ</NavLink>
          </nav>
        </Container>
      </header>
    );
  }
}

export default Header;
