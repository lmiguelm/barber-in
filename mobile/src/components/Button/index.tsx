import React from 'react';
import { ButtonContainer,ButtonTitle } from './styles';

interface ButtonProps {
  disabled: boolean;
  color: string;
  icon?: any;
}

const Button: React.FC<ButtonProps> = ({ children, disabled, color, icon }) => {
  return (
    
    <ButtonContainer 
      disabled={disabled}
      color={color} 
    >
      <ButtonTitle>{children}</ButtonTitle>
      {icon}
    </ButtonContainer>
  );
}
export default Button;