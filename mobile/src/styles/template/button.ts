import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ButtonProps {
  disabled?: boolean;
  color?: string;
}

export const Button = styled(RectButton)<ButtonProps>`
  width: 100%;
  height: 60px;

  border-radius: 8px;

  justify-content: center;
  align-items: center;
  flex-direction: row;

  border: 1px solid ${props => props.color ? props.color : props.theme.colorPrimary};
  background: ${props => props.color ? props.color : props.theme.colorPrimary};
  opacity: ${props => props.disabled ? 0.5 : 1};

  margin-top: 10px;
`;

export const ButtonTitle = styled.Text`
  color: ${props => props.theme.textBase};
  font-size: 24px;
  font-weight: 600;
  font-family:  'Poppins_600SemiBold';
`;