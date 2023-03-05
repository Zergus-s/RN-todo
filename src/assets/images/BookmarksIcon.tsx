import React from 'react';
import {View} from 'react-native';

import {Path, Svg} from 'react-native-svg';
import {PALETTE} from '../styles';

type Props = {size: number; color: string; fill?: string};

const BookmarksIcon = ({color, size, fill = PALETTE.color1}: Props) => {
  return (
    <View>
      <Svg width={size} height={size}>
        <Path
          opacity="0.1"
          d="M17 3C18.1046 3 19 3.89543 19 5L19 19.0536C19 20.5893 17.341 21.552 16.0077 20.7901L12.9923 19.067C12.3774 18.7157 11.6226 18.7157 11.0077 19.067L7.99228 20.7901C6.65897 21.552 5 20.5893 5 19.0536L5 5C5 3.89543 5.89543 3 7 3L17 3Z"
          fill={color}
        />
        <Path
          d="M17 3C18.1046 3 19 3.89543 19 5L19 19.0536C19 20.5893 17.341 21.552 16.0077 20.7901L12.9923 19.067C12.3774 18.7157 11.6226 18.7157 11.0077 19.067L7.99228 20.7901C6.65897 21.552 5 20.5893 5 19.0536L5 5C5 3.89543 5.89543 3 7 3L17 3Z"
          stroke={color}
          stroke-width="2"
          stroke-linejoin="round"
          fill={fill}
        />
      </Svg>
    </View>
  );
};

export default BookmarksIcon;
