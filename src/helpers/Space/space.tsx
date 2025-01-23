import {View} from 'react-native';
import React, {FC} from 'react';
import { hp, wp } from '../Responsive/responsive';

interface ISpaceProps {
  orientation?: 'vertical' | 'horizontal';
  value?: number;
}
const Space: FC<ISpaceProps> = ({orientation = 'vertical', value}) => {
  if (orientation === 'horizontal') {
    return <View style={{width: value || wp('4%')}} />;
  }
  return <View style={{height: value || hp('2%')}} />;
};

export default Space;