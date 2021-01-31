import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ButtonProps {
  disabled: boolean;
  color: string;
}

export const ButtonContainer = styled(RectButton)<ButtonProps>`
  width: 100%;
  height: 60px;

  border-radius: 8px;

  justify-content: center;
  align-items: center;
  flex-direction: row;

  border: 1px solid ${props => props.color};
  background: ${props => props.color};
  opacity: ${props => props.disabled ? 0.5 : 1};

  margin-top: 10px;
`;

export const ButtonTitle = styled.Text`
  color: ${props => props.theme.textBase};
  font-size: 24px;
  font-weight: 600;
  font-family:  'Poppins_600SemiBold';
`;