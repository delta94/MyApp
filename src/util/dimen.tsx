import {
    widthPercentageToDP as wp2dp,
    heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen'

import {defaultWidth, defaultHeight} from '@constant'
  
  export const wp = (dimension: number) => {
    return wp2dp((dimension / defaultWidth) * 100 + '%');
  }

  export const hp = (dimension: number) => {
    return hp2dp((dimension / defaultHeight) * 100 + '%');
  }