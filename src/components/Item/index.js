import React from 'react';
import { View } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { Container, Button, ButtonText, TrashContainer } from './styles';

const Item = ({ title, deleteItem }) => {
  const [checked, setChecked] = useState(false);
  const check = () => {
    setChecked(!checked)
  }
  
  return (
  <Container>
    <Button checked={checked} onPress={() => check()}>
      <ButtonText>
        {title}
      </ButtonText>
      <AntDesign name="checkcircleo" size={24} color="green" />
    </Button>
    <TrashContainer onPress={() => deleteItem(title)}>
      <Feather name="trash-2" size={24} color="white" />
    </TrashContainer>
  </Container>
  )
}

export default Item;