import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => props.theme.backgroundPrimary};

  padding: 30px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  align-items: center;
`;