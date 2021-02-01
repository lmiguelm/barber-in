import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

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

export const InputMask = styled(TextInputMask)`
  background-color: ${props => props.theme.textBase};
  height: 60px;
  border-radius: 8px;

  padding: 0px 30px;

  margin-top: 10px;

  font-family: ${props => props.theme.fonts.regular};
`;

export const TextArea = styled.TextInput`
  background-color: ${props => props.theme.textBase};
  height: 110px;
  border-radius: 8px;

  padding: 0px 30px;

  margin-top: 10px;

  font-family: ${props => props.theme.fonts.regular};
`;