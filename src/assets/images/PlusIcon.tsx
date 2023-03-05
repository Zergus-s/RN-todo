import React from 'react';
import {View} from 'react-native';

import {Circle, Line, Svg} from 'react-native-svg';
import {PALETTE} from '../styles';

type Props = {color: string | undefined};

const PlusIcon = ({color}: Props) => {
  return (
    <View>
      <Svg width={30} height={30}>
        <Circle fill={color} cx="15" cy="15" r="12" />
        <Line
          fill="none"
          stroke={PALETTE.color1}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          x1="15"
          y1="8"
          x2="15"
          y2="22"
        />
        <Line
          fill="none"
          stroke={PALETTE.color1}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          x1="22"
          y1="15"
          x2="8"
          y2="15"
        />
      </Svg>
    </View>
  );
};

export default PlusIcon;
