import styled from 'styled-components/native';
import Lottie from 'lottie-react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.backgroundPrimary};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 10px;
  color: ${props => props.theme.textBase};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 18px;
`;