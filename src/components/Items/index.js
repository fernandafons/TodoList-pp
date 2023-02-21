import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';

const Items = (item) => {
  return (
  <Container>
    <ItemText>{item}</ItemText>
  </Container>
  );
}

export default Items;