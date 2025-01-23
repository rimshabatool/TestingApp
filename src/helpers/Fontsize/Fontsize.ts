import { Dimensions, PixelRatio } from 'react-native';

const widthPercentageToDP = (widthPercent: string | number): number => {
    const screenWidth = Dimensions.get('window').width;
    const elemWidth = parseFloat(widthPercent.toString());
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const heightPercentageToDP = (heightPercent: string | number): number => {
    const screenHeight = Dimensions.get('window').height;
    const elemHeight = parseFloat(heightPercent.toString());
    return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const scale = {
    h: (size: number) =>
        Math.sqrt(
            heightPercentageToDP('100%') ** 2 + widthPercentageToDP('100%') ** 2,
        ) *
        (size / 100),
    w: (size: number = 375) =>
        Math.sqrt(
            heightPercentageToDP('100%') ** 2 + widthPercentageToDP('100%') ** 2,
        ) *
        (size / 100),
};

export { scale };