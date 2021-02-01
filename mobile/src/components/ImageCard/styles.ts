import styled from 'styled-components/native';

export const ImagesContainer = styled.View`
  margin-top: 10px;
  height: 60px;
`;

export const ImageCardContainer = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colorPrimary};
  border-radius: 8px;
`;
export const ImageContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageUploaded = styled.Image`
  height: 52px;
  width: 48px;
`;

export const Name = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.textBase};
`;

export const FormImage = styled.TouchableOpacity`
  background-color: ${props => props.theme.backgroundSecondary};
  width: 100%;
  height: 60px;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 2px solid ${props => props.theme.colorPrimary};
  border-style: dashed;
`;