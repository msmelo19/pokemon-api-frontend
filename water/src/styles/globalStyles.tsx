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
    background-color: ${colors.grayLighterColor};
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
    color: ${colors.secondaryTextColor};
    border-radius: 0;
    border-color: ${colors.secondaryColor};
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    &:hover {
      background-color: ${colors.secondaryDarkColor};
      border-color: ${colors.secondaryDarkColor};
      color: ${colors.secondaryTextColor};
    }

    &:focus {
      background-color: ${colors.secondaryColor};
      border-color: ${colors.secondaryColor};
      box-shadow: none;
      color: ${colors.secondaryTextColor};
    }

    &:not(:disabled):not(.disabled).active,
    &:not(:disabled):not(.disabled):active,
    &:not(:disabled):not(.disabled):active:focus {
      background-color: ${colors.secondaryDarkColor};
      border-color: ${colors.secondaryDarkColor};
      box-shadow: 0 0 0 0.2rem ${rgba(colors.secondaryColor, 0.4)};
      color: ${colors.secondaryTextColor};
    }
  }

  .page-link {
    color: ${colors.secondaryColor};

    &:hover {
      color: ${colors.primaryColor};
    }

    &:focus {
      box-shadow: none;
    }
  }

  .page-item.active {
    .page-link {
      background-color: ${colors.secondaryColor};
      border-color: ${colors.secondaryColor};
    }
  }
`;
