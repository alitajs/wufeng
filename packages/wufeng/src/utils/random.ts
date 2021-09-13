import color from 'color';

/**
 * 设置随机值
 */
export const getRandom = () => {
  const val = `${Math.random().toString(36).slice(2, 6)}`;
  return val;
};
const ratio = 0.618033988749895;
let hue = Math.random();
/**
 * 设置随机值色值
 */
export const getRandomColor = (saturation: number = 0.5, value: number = 0.95) => {
  hue += ratio;
  hue %= 1;

  return color({
    h: hue * 360,
    s: saturation * 100,
    v: value * 100,
  });
};
