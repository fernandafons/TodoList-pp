import styled from 'styled-components';

export const Container = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ checked }) => checked ? '#00A300' : '#000'};
  margin: 10px;
  padding: 15px;
  width: 70%;
  border-radius: 10px;
  border: 1px solid #00A300;
  flex-direction: row;
  justify-content: space-between;
  /* justify-content: center; */
  align-items: center;
`;

export const TrashContainer = styled.TouchableOpacity`
  background-color: #7a297a;
  margin: 8px;
  /* padding: 15px; */
  border-radius: 10px;
  border: 1px solid #7a297a;

  height: 65px;
  width: 65px;
  justify-content: center;
  align-items: center;
  /* margin-left: 18px; */
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;
