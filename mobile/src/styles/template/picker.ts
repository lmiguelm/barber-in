import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

export const Select = styled(Picker)`
  background-color: ${props => props.theme.textBase};
  color: ${props => props.theme.backgroundSecondary};
  border-radius: 8px;
  height: 60px;
  border-radius: 8px;
  margin-top: 10px;
  padding: 0px 30px;
`;