import React from 'react';
import { View } from 'react-native';
import { useState } from 'react';

import { Container, ButtonText } from './styles';

const Item = (title) => {
  const [checked, setChecked] = useState(false);
  const check = () => {
    console.log('checked', checked)
    setChecked(!checked)
  }
  return (
  <Container checked={checked} onPress={() => check()}>
    <ButtonText>
      {title.title}
    </ButtonText>
  </Container>
  )
}

export default Item;