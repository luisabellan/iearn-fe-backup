import React from 'react';
import 'typeface-mulish';
import 'typeface-oswald';
import 'typeface-inter';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    error: '#EE0004',
    hint: '#595959',
    purple: '#543FD3',
    activeBorder: '#543FD3',
    activeLabel: '#543FD3',
    activeText: '#543FD3',
    focusBorder: '#543FD3',
    border: '#543FD3',
    cursor: '#543FD3',
    caretActive: '#543FD3',
    darkGrey: '#767676',
    grey: '#949494',
    defaultBorder: '#949494',
    green: '#167716',
    brokenWhite: '#f5f5f5',
    red: '#EE0004',
    white: '#E5E5E5',
    pureWhite: '#ffffff',
    borderOnHover: '#1A1A1A',
    caretDefault: '#1A1A1A',
    inputText: '#1A1A1A',
    inputTextHint: '#1A1A1A',
    brightGrey: '#595959',
    black: '#000000',
    profileFontColor: '#0C2340',
    profileBackgroundColor: '#FFFFFF',
    bodyBackgroundColor: '#F7F8FC',
    pencil: '#A4A6B3',
    hr: '#DFE0EB',
    notesHr: '#00000066',
    artifactsLinks: '#4D89B7',
    viewButton: '#4D89B7',
  },
  //fonts: ['Mulish', 'Oswald', 'Noto Sans', 'Inter', 'Times New Roman'],
  fonts: {
    times: 'Times New Roman',
    mulish: 'Mulish',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    verySmall: '0.6875rem', // 11px
    small: '1rem', // 16px
    mainTitle: '24px', // 24px
    mainTitleDesktop: '36px', // 36px
    medium: '20px', // 20px
    getStartedTitle: '26px', // 26px
    iEarnLink: '26px', // 26px
    getStartedTitleDesktop: '26px', // 26px
    iEarnLinkDesktop: '64px', // 64px
    large: '2.25rem',
  },

  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
