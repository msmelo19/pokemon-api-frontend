import { createGlobalStyle } from 'styled-components';
import { rgba } from 'polished';
import * as colors from '../config/colors';
import 'bootstrap/dist/css/bootstrap.min.css';
import './text.css';

export default createGlobalStyle`
  * {
      box-sizing: border-box;
      overflow-anchor: none;
    }

  body {
    font-family: 'Open Sans', sans-serif;
    padding-bottom: 32px;
  }

  :is(h1, h2, h3, h4, h5, h6) {
    font-family: 'Proza Libre', serif;
  }

  .navbar {
    padding: 16px 0;
    background-color: ${colors.primaryColor};
  }

  .navbar-light {
    & .navbar-brand {
      font-family: 'Proza Libre', sans-serif;
      font-weight: bold;
      font-size: 2rem;
      color: ${colors.secondaryDarkColor};
    }
  }

  .form-control {
    &:focus {
      box-shadow: 0 0 0 0.2rem ${rgba(colors.secondaryColor, 0.4)};
    }
  }

  .btn-secondary-custom {
    background-color: ${colors.secondaryColor};
    border-color: ${colors.secondaryColor};
    color: ${colors.secondaryTextColor};

    &:hover {
      background-color: ${colors.secondaryLightColor};
      border-color: ${colors.secondaryLightColor};
      color: ${colors.secondaryTextColor};
    }

    &:active {
      background-color: ${colors.secondaryDarkColor};
      border-color: ${colors.secondaryDarkColor};
      color: ${colors.secondaryTextColor};
    }

    &:focus {
      box-shadow: none;
    }
  }
`;
