import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  background-color: ${props => props.theme.backgroundSecondary};
  height: 100px;
  align-items: center;
  flex-direction: row;
  padding: 30px 30px 0px 30px;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.semi};
  font-size: 24px;
  color: ${props => props.theme.textBase};
  margin-left: 30px;
`;