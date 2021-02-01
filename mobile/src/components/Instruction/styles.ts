import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${props => props.theme.backgroundPrimary};
  opacity: .7;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${props => props.theme.textBase};
  font-size: 24px;
  text-align: center;
  font-family: ${props => props.theme.fonts.regular};
  margin-top: 10px;
`;