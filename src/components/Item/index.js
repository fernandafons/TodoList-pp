import React from 'react';
import { View } from 'react-native';

import { Container, ButtonText } from './styles';

const Item = (title) => {
  console.log(title);
  return (
  <Container>
    <ButtonText>
      {title.title}
    </ButtonText>
  </Container>
  )
}

export default Item;