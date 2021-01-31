import styled from 'styled-components/native';

export const InputContainer = styled.View`
  width: 100%;
`;

export const Input = styled.TextInput`
  background-color: ${props => props.theme.textBase};
  height: 60px;
  border-radius: 8px;

  padding: 0px 30px;

  margin-top: 10px;

  font-family: ${props => props.theme.fonts.regular};
`;