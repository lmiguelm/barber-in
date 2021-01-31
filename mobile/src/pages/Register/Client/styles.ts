import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 30px;
  justify-content: center;
  background-color: ${props => props.theme.backgroundPrimary};
`;

export const TextContainer = styled.View`
`;

export const Title = styled.Text`
  color: ${props => props.theme.textBase};
  font-family: ${props => props.theme.fonts.semi};
  font-size: 24px;
`;
export const SubTitle = styled.Text`
  margin-top: 10px;
  color: ${props => props.theme.textBase};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 14px;
`;

export const FormContainer = styled.View`
  margin-top: 60px;
`;