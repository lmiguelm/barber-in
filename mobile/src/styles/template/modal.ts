import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View`
  background: ${props => props.theme.backgroundSecondary};
  border-radius: 8px;
  padding: 30px;
  align-items: flex-start;
`;

export const ModalText = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: 14px;
  color: ${props => props.theme.textBase};
  text-align: right;
  line-height: 27px;
`;
export const ModalTextHightLight = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: 14px;
  color: ${props => props.theme.colorSecondary};
  text-align: right;
  line-height: 27px;
`;

export const CloseText = styled.Text`
  color: ${props => props.theme.textBase};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 14px;
`;