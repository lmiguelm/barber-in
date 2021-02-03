import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.ScrollView`
  background: ${props => props.theme.backgroundPrimary};
`;
export const Header = styled.View`
  background: ${props => props.theme.backgroundSecondary};
  height: 100px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 30px 30px 0px 30px;
`;
export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.semi};
  font-size: 24px;
  color: ${props => props.theme.textBase};
  margin-left: 30px;
`;

export const Content = styled.View`
  padding: 30px 0px 30px 30px;
`;

export const ButtonContainer = styled.View`
  padding: 0px 30px 0px 0px;
  margin-top: 30px;
`;

export const Carousel = styled.ScrollView`
`;

export const Slider = styled.View`
`;

export const HourContainer = styled.Text`
  flex-direction: row;
  padding: 30px 0px 30px 0px;
  align-items: center;
  justify-content: center;
`;
export const HourText = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.colorSecondary};
  font-family: ${props => props.theme.fonts.regular};
`;

export const RouteText = styled.Text`
  text-align: center;
  margin-top: 25px;
  font-size: 18px;
  color: ${props => props.theme.colorPrimary};
  font-family: ${props => props.theme.fonts.regular};
`;

export const MapContainer = styled.View`
  margin-top: 30px;
  margin-right: 30px;
  height: 280px;
  background: ${props => props.theme.backgroundSecondary};
  border-radius: 8px;
`;

export const Pagination = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: 18px;
  color: ${props => props.theme.textBase};
  text-align: center;
  z-index: 999;
`;

export const PaginationContainer = styled.View`
  background: ${props => props.theme.colorPrimary};
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  height: 300px;
  width: ${`${Dimensions.get('window').width}px`};
`;

export const Description = styled.Text`
  color: ${props => props.theme.textBase};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 14px;
  line-height: 23px;
`;