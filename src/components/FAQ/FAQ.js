import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {faqContent} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faqContent.title} imageSrc={faqContent.image} />
    <h2>{faqContent.number1}</h2>
    <p>{faqContent.Answer1}</p>
    <h2>{faqContent.number2}</h2>
    <p>{faqContent.Answer2}</p>
    <h2>{faqContent.number3}</h2>
    <p>{faqContent.Answer3}</p>
    <h2>{faqContent.number4}</h2>
    <p>{faqContent.Answer4}</p>
  </Container>
);

export default FAQ;
