import React from 'react';
import {View, Image} from 'react-native';
import images from './images';

const ChatImage =() => {

    return (
        <View>
            <Image source={images.image5} style={{ width: 50, height: 30 }} resizeMode='contain' />
        </View>
    );
};

export default ChatImage;
