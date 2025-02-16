import styled from "styled-components"
import Text from "../atoms/Text"
import SvgIcon from "../atoms/SvgIcon"
import ArrowButton from "../atoms/ArrowButton"
import Network from "../atoms/Network"
import CircleNetwork from "../atoms/CircleNetwork"
import { Link } from "react-router-dom"

const FooterStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 190px;
    background-color: ${props => props.theme.PrimaryColor};

    svg {
    fill: #3A3A3A;
  }

  svg:hover {
    fill: #f5f5f5;
  }
   
`

const StyleText = styled(Text)`
  h1 {
    text-align: center;
    font-size: 30px;
  }
`

const ArrowTop = styled(SvgIcon)`
  transform: rotate(-90deg);
`

const StyledArrowButton = styled(ArrowButton)`
    position: relative;
    width: 80px;
    height: 50px;
    top: -40px;
    left: 5%;
    background-color: ${props => props.theme.QuaternaryColor};
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.2s;
    transform: rotate(0deg);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.5);
    }

`;

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterStyle>
      <StyledArrowButton onClick={scrollToTop}>
        <ArrowTop name='arrow' size={40} fill='white' />
      </StyledArrowButton>
      <StyleText h1='Redes Sociales' />
      <Network>
        <Link>
        <CircleNetwork>
          <SvgIcon name='icon_facebook' size={25} fill="red" />
        </CircleNetwork>
        </Link>
        <Link to='https://github.com/carlosjuny' target='_blank'><CircleNetwork>
          <SvgIcon name='icon_github' size={25} />
        </CircleNetwork></Link>
        <Link to='https://www.linkedin.com/in/carlos-medina-peralta-desarrollador-web-mobile/' target='_blank'>
        <CircleNetwork>
          <SvgIcon name='icon_linkedin' size={20} />
        </CircleNetwork>
        </Link>
      </Network>
    </FooterStyle>
  )
}

export default Footer