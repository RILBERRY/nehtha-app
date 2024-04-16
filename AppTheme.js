// AppTheme.js

import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const CustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
    primary: '#ADEBEB',
    secondary: '#ADEBEB',
    card: '#1E7B7B',
    text: 'white',
    tintColor: 'white',
    listItem: '#ffffff',
    borderColor: 'gray',
    // border: 'rgb(199, 199, 204)',
    // notification: 'rgb(255, 69, 58)',
  },
};

export const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    // background: 'transparent',
    primary: '#ADEBEB',
    secondary: '#ADEBEB',
    // card: '#1E7B7B',
    text: 'white',
    listItem: '#ffffff',
    borderColor: 'gray',

    // border: 'rgb(199, 199, 204)',
    // notification: 'rgb(255, 69, 58)',
  },
};
