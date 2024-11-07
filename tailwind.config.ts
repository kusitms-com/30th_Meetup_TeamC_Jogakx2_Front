import type { Config } from 'tailwindcss'

const px0To10 = {
  ...Array.from(Array(11)).reduce(
    (acc, _, i) => ({ ...acc, [i]: `${i}px` }),
    {},
  ),
}
const px0To100 = {
  ...Array.from(Array(101)).reduce(
    (acc, _, i) => ({ ...acc, [i]: `${i}px` }),
    {},
  ),
}
const px0To500 = {
  ...Array.from(Array(501)).reduce(
    (acc, _, i) => ({ ...acc, [i]: `${i}px` }),
    {},
  ),
}

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        system_red: '#FF5D5E',
        system_blue: '#528DFF',
        accent_100: '#FF4F38',
        accent: {
          10: '#FFEEEC',
          100: '#FF4F38',
        },
        primary_foundation_100: '#1A1A25',
        primary_foundation_40: '#A3A3A8',
        primary_foundation_10: '#E9E9EA',
        primary_foundation_50: '#8D8D92',
        primary_foundation_60: '#76767C',
        primary_foundation_30: '#BBBBBE',
        primary_foundation_5: '#F3F3F4',
      },
      width: px0To500,
      height: px0To500,
      borderWidth: px0To10,
      fontSize: px0To100,
      lineHeight: px0To100,
      minWidth: px0To500,
      minHeight: px0To500,
      spacing: px0To500,
      borderRadius: { ...px0To100, button: 12, div: 12 },
    },
    fontFamily: {
      pretendard: ['var(--pretendard)'],
    },
  },
  plugins: [],
}
export default config
