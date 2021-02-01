import React from 'react';
import {AntDesign} from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import { ImageContainer, ImageUploaded, Name, ImagesContainer, ImageCardContainer } from './styles';

interface ImageCardProps {
  image: string;
  index: number;
  callback(index: number): void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, index, callback }) => {
  return (  
    <ImagesContainer>
      <ImageCardContainer>
        <ImageContainer>
          <ImageUploaded source={{ uri: image }}/>
          <Name style={{ marginLeft: 10 }} >{`image_${index}.jpg`}</Name>
        </ImageContainer>
        <RectButton onPress={() => callback(index)} style={{ marginRight: 30 }}>
          <AntDesign  name="close" size={20} color="#FAF8FF" />
        </RectButton>
      </ImageCardContainer>
    </ImagesContainer>
  );
}
export default ImageCard;