import React from 'react';
import Container from '../Container/Container';
import {info} from '../../data/dataStore';

const Info = () => (
  <Container>
    <h2>{info.title}</h2>
    <p>{info.description}</p>
  </Container>
);

export default Info;
