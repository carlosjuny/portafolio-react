import NicoMoji from '../assets/fonts/NicoMoji.ttf';
import Offside from '../assets/fonts/Offside.ttf';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
      font-family: 'Offside';
      src: url(${Offside}) format('truetype');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'NicoMoji';
      src: url(${NicoMoji}) format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  * {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
      outline: none;  
  }

  .arrow-left {
    left: 10px;
    transform: rotate(-90deg);
}

.arrow-right {
    right: 10px;
    transform: rotate(90deg);
}

@media (min-width: 1024px) {
    .arrow-left {
        /* bottom: 15%; */
        left: 15%;
    }

    .arrow-right {
        /* bottom: 15%; */
        right: 15%;
    }
}


`;

export default GlobalStyle;
