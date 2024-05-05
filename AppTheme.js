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
    textSecondary: '#1E7B7B',
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
    text: '#1E7B7B',
    textSecondary: 'white',
    listItem: 'rgba(255, 255, 255,.15)',
    borderColor: 'gray',

    // border: 'rgb(199, 199, 204)',
    // notification: 'rgb(255, 69, 58)',
  },
};
