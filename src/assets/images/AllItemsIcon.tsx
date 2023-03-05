import React from 'react';
import {View} from 'react-native';

import {Circle, Path, Svg} from 'react-native-svg';

type Props = {size: number; color: string};

const AllItemsIcon = ({color, size}: Props) => {
  return (
    <View>
      <Svg width={size} height={size}>
        <Path
          d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15"
          stroke={color}
          stroke-width="1.32"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12 12H15"
          stroke={color}
          stroke-width="1.32"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12 16H15"
          stroke={color}
          stroke-width="1.32"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
          stroke={color}
          stroke-width="1.32"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Circle cx="9" cy="12" r="1" fill={color} />
        <Circle cx="9" cy="16" r="1" fill={color} />
      </Svg>
    </View>
  );
};

export default AllItemsIcon;
