import React from 'react';
import { Text } from 'react-native';

import { Button } from './styles';

const AddButton = ({ add }) => {

  return (
    <>
      <Button onPress={() => add()}>
        <Text>Add</Text>
      </Button>
    </>
  );
}

export default AddButton;