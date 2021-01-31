import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.backgroundPrimary};
  justify-content: center;
  padding: 90px 30px 0px 30px;
`;

export const Logo = styled.Image`
  position: absolute;
  top: 0;
  align-self: center;
  margin-top: 60px;
`;

export const FormContainer = styled.View`

`;
