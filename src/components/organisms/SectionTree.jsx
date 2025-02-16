import { useState } from "react";
import styled from "styled-components";
import Image from "../atoms/Image";
import MobileCine from '../../assets/image/project-mobile-cine.jpeg';
import MobileDsb from '../../assets/image/project-mobile-dsb.jpeg';
import DesktopCine from '../../assets/image/project-desktop-cine.jpeg';
import DesktopDsb from '../../assets/image/project-desktop-dsb.jpeg';
import mobileImage from '../../assets/image/mobile.png';
import desktopImage from '../../assets/image/desktop.png';
import BackgroundWhite from "../moleculs/BackgroundWhite";
import BackgroundGrey from "../atoms/BackgroundGrey";
import SvgIcon from "../atoms/SvgIcon";
import Text from "../atoms/Text";
import TitleBackground from "../moleculs/TitleBackground";
import ArrowButton from "../atoms/ArrowButton";
import { Link } from "react-router-dom";

const SectionStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.PrimarColor};


    @media (min-width: 1024px) {
      .projects{
      display: flex;
      flex-direction: row;
      }
    }
`;

const BackgroundGreyStyle = styled(BackgroundGrey)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .mobile {
    position: relative;
    display: flex;
  }

  .text {
    color: ${props => props.theme.QuaternaryColor};
  }

  .backgroundMobile {
    width: 350px;
    height: 500px;
    background-image: url(${mobileImage});
    background-position: center;
  }

  .networkProject {
    display: flex;
    gap: 30px;
  }

  /* svg {
    fill: #FFFFFF;
  } */

  @media (min-width: 1024px) {
    width: 50%;
  }

`;

const LeftArrowButton = styled(ArrowButton)`
  position: absolute;
  left: -10px;
  transform: rotate(-90deg);
  top: 250px;
  z-index: 2;
`

const RightArrowButton = styled(ArrowButton)`
  position: absolute;
  right: -10px;
  transform: rotate(90deg);
  top: 250px;
`

const LeftArrowButtonDesktop = styled(LeftArrowButton)`
  position: absolute;
  left: 20%;
  top: 70%;
  z-index: 1;

  @media (min-width: 768px) {
    left: 30%;
  }

`

const RightArrowButtonDesktop = styled(RightArrowButton)`
  position: absolute;
  right: 20%;
  top: 70%;

  @media (min-width: 768px) {
    right: 30%;
  }
`


const StyleText = styled(Text)`
    position: relative;
    top: -50px;

    h1 {
      position: absolute;
      top: 50%;
      font-size: 50px;
      left: 35px;
    }
    @media (min-width: 768px) {
      h1 {
      left: 300px;
    }
  }

  @media (min-width: 1024px) {
      h1 {
      left: 250px;
   }
  }
`

const BackgroundWhiteStyle = styled(BackgroundWhite)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 150px;
  position: relative;
  
  .backgroundDesktop {
    display: flex;
    width: 375px;
    height: 500px;
    background-image: url(${desktopImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    margin: auto;
  }

  .networkProject {
    display: flex;
    gap: 30px;
  }

  @media (min-width: 768px) {
    .backgroundDesktop {
      width: 520px;
    }
  }
  
  @media (min-width: 1024px) {
    width: 50%;
  }

  @media (min-width: 1440px) {
    .backgroundDesktop {
      width: 620px;
    }
  }
`;

const MobileStyledImage = styled(Image)`
    display: flex;
    margin: auto;
    position: relative;
    width: 198px;
    height: 400px;
    top: 50px;
    border-radius: 30px;

`;

const DesktopStyledImage = styled(Image)`
    display: flex;
    position: relative;
    margin: auto;
    width: 265px;
    height: 150px;
    top: -22px;
    border-radius: 5px;

    @media (min-width: 768px) {
        top: -31px;
        width: 365px;
        height: 205px;
    }

    @media (min-width: 1440px) {
      top: -36px;
      width: 440px;
      height: 250px;
    }
`;


const SectionTree = () => {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);

  const mobileImages = [MobileCine, MobileDsb];
  const desktopImages = [DesktopCine, DesktopDsb];

  const handleNextMobile = () => {
    setMobileIndex((prevIndex) => (prevIndex + 1) % mobileImages.length);
  };

  const handleNextDesktop = () => {
    setDesktopIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
  };

  const githubUrls = [
    'https://github.com/carlosjuny/cine-produccion-frontend',
    'https://github.com/carlosjuny/dashboard-dsb-frontend'
  ];
  
  const deployUrls = [
    'https://cine-produccion.vercel.app/',
    'https://dashboard-dsb.vercel.app/'
  ];

  return (
    <SectionStyle>
      <TitleBackground leftColor="#3A3A3A" rightColor="#FFFFFF">
                  <StyleText h1='Proyectos'/>
        </TitleBackground>
        <div className="projects">
          <BackgroundGreyStyle>
              <div>
                <StyleText h2='mobile' className="text"/>
              </div>
              <div className="mobile">
              <LeftArrowButton className="arrow_left" onClick={handleNextMobile}>
                  <SvgIcon name='arrow_left' size={35}  style={{ transform: "rotate(90deg)"}}/>
              </LeftArrowButton>
              <div className='backgroundMobile'>
                  <MobileStyledImage src={mobileImages[mobileIndex]} alt="project"/>
              </div>
              <RightArrowButton className="arrow" onClick={handleNextMobile}>
                  <SvgIcon name='arrow' size={35}  style={{ transform: "rotate(-90deg)" }}/>
              </RightArrowButton>
              </div>
              <div className="networkProject">
              <Link to={githubUrls[mobileIndex]} target="_blank">
                <SvgIcon name='icon_github' size={50} color='white'/>
                </Link>
                <Link to={deployUrls[mobileIndex]} target="_blank">
                  <SvgIcon name='icon_deploy' size={50} color='white'/>
                </Link>
              </div>
          </BackgroundGreyStyle>

          <BackgroundWhiteStyle>
              <div>
                <StyleText h2='Desktop'/>
              </div>
          <div className="mobile">
              <LeftArrowButtonDesktop onClick={handleNextDesktop}>
                  <SvgIcon name='arrow_left' size={35}   style={{ transform: "rotate(90deg)" }}/>
              </LeftArrowButtonDesktop>
              <div className="backgroundDesktop">
                <DesktopStyledImage src={desktopImages[desktopIndex]} alt="desktop" />
              </div>
              <RightArrowButtonDesktop  onClick={handleNextDesktop}>
                  <SvgIcon name='arrow' size={35}  style={{ transform: "rotate(-90deg)" }}/>
              </RightArrowButtonDesktop>
          </div>
            <div className="networkProject">
            <Link to={githubUrls[desktopIndex]} target="_blank">
              <SvgIcon name='icon_github' size={50} />
            </Link>
            <Link to={deployUrls[desktopIndex]} target="_blank">
              <SvgIcon name='icon_deploy' size={50} />
            </Link>
            </div>
          </BackgroundWhiteStyle>
        </div>
    </SectionStyle>
  );
}

export default SectionTree;
