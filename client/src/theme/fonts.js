import { injectGlobal } from 'styled-components';

const fonts = {
  openSans: 'Open Sans, sans-serif',
  openSansSemiBold: 'Open Sans Semi-Bold, sans-serif',
  openSansBold: 'Open Sans Bold, sans-serif',
  openSansExtraBold: 'Open Sans Extra-Bold, sans-serif',
};

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300, 300i,400, 400i,600,700, 800');

body {
  font-size: 16px;
  font-weight: 400;
  font-family: ${fonts.openSans};
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
}

h1 {font-size: 1.94em}
h2 {font-size: 1.937em}
h3 {font-size: 1.375em}
`;

export default fonts;
