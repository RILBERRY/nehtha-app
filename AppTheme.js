// AppTheme.js

import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const CustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    primary: '#ADEBEB',
    secondary: '#ADEBEB',
    card: '#1E7B7B',
    text: 'white',
    textSecondary: '#1E7B7B',
    tintColor: 'white',
    listItem: '#ffffff',
    listItemText: 'black',
    fadeText: '#888B8C',
  },
  status: {
    requestedText: 'red',
    requestedBg: 'orange',
  },
};

export const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: 'black',
    primary: '#ADEBEB',
    secondary: '#ADEBEB',
    card: '#1E7B7B',
    text: 'white',
    textSecondary: 'white',
    listItem: 'rgba(255, 255, 255,.15)',
    listItemText: 'white',
    fadeText: '#888B8C',

  },
  status: {
    requestedText: 'red',
    requestedBg: 'orange',
  },
};
