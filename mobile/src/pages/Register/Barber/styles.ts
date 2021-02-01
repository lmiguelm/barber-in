import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${props => props.theme.backgroundPrimary};
  justify-content: center;
  padding: 30px;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.backgroundPrimary};
  padding: 60px 30px 30px 30px;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  margin-bottom: 30px;
  align-self: center;
  width: 80%;
`;

export const TextContainer = styled.View``;

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
  margin-top: 30px;
`;

export const ImagesContainer = styled.View`
  margin-top: 10px;
  height: 60px;
`;

export const ImageCard = styled.View`
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
