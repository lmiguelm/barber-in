import MapView from 'react-native-maps';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.backgroundPrimary};
`;
export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;
export const CalloutContainer = styled.View`
  background-color: ${props => props.theme.backgroundSecondary};
  height: 46px;
  width: 160px;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 8px;
`;

export const CalloutText = styled.Text`
  color: ${props => props.theme.colorPrimary};
  font-family: ${props => props.theme.fonts.bold};
  font-size: 14px;
`;