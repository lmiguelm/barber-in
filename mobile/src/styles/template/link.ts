import styled from 'styled-components/native';

export const LinkContainer = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const LinkTitle = styled.Text`
  color: ${props => props.theme.colorPrimary};
  font-family:  ${props => props.theme.fonts.regular};
`;
