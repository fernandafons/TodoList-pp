import React from 'react';
import { Container, TextInput } from './styles';


const Input = ({item, setItem}) => {
  return (
    <>
      <Container>
        <TextInput 
          placeholder="Type here"
          value={item}
          onChangeText={(value) => setItem(value)}
        />
      </Container>
    </>
  );
}

export default Input;