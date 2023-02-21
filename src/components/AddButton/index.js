import React from 'react';
import { Text } from 'react-native';

import { Button, ButtonText } from './styles';

const AddButton = ({ add }) => {

  return (
    <>
      <Button onPress={() => add()}>
        <ButtonText>+</ButtonText>
      </Button>
    </>
  );
}

export default AddButton;