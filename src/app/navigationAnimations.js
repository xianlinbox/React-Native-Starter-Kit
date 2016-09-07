import {
  Animated,
  Easing,
} from 'react-native';

export function applyAnimation(pos, navState) {
  Animated.timing(pos, {
    toValue: navState.index,
    duration: 500
  }).start();
}