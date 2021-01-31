import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.backgroundPrimary};
  justify-content: center;
  padding: 30px;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.semi};
  color: ${props => props.theme.textBase};
  font-size: 24px;
`;

export const ButtonContainer = styled.View`
  margin-top: 90px;
`;

export const Icon = styled.Image`
  position: absolute;
  right: 0;
  margin-right: 30px;
`;