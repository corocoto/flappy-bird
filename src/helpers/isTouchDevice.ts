import _get from 'lodash/get';

export function isTouchDevice(): boolean {
  return (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (_get(navigator, 'msMaxTouchPoints', 0) > 0));
}
