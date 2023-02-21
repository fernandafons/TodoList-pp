import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
  background-color: ${({ checked }) => checked ? '#00A300' : '#000'};
  margin: 10px;
  margin-top: 15px;
  padding: 15px;
  width: 90%;
  border-radius: 10px;
  border: 1px solid #00A300;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;
