import styled from 'styled-components';
import BackgroundWhite from '../moleculs/BackgroundWhite';
import Photo from '../../assets/image/cm.jpg';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import BackgroundGrey from '../atoms/BackgroundGrey';
import SvgIcon from '../atoms/SvgIcon';

const SectionStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

  
    @media (min-width: 1024px) {
      .TitleBackground {
      display: flex;
      flex-direction: row;
    }
  }
`

const StyledImage = styled(Image)`
    position: relative;
    margin: auto;
    top: 70px;
    border-radius: 50%;
    width:250px;
    height: 250px;

    @media (min-width: 1024px) {
        width: 330px;
        height: 325px;
        top: -30px;
    }
`;

const StyledText = styled(Text)`
  position: relative;
  width: 80%;
  display: flex;
  text-align: left;
  margin: auto;
  top: 10%;
  white-space: pre-line;

  h2 {
    font-size: 35px;
  }


@media (min-width: 768px) {
  h1 {
    font-size: 80px;
  }

  @media (min-width: 1024px) {
      top: 20%;
    }
}
`

const BackgroundGreyStyle = styled(BackgroundGrey)`
    display: flex;
    height: 50vh;
    align-self: center;
`

const DownloadIcon = styled(SvgIcon)`
     transform: rotate(90deg);
`;

const SectionOne = () => {
  return (
    <SectionStyle>
      <div className='TitleBackground'>
        <BackgroundWhite>
          <StyledText h1='Hola' />
          <StyledText h2='Soy Carlos' />
          <StyledText p={`\nSoy desarrollador Full Stack con experiencia en el diseño, desarrollo 
                      e implementación de aplicaciones web y móviles. Manejo tanto el frontend
                      como el backend, trabajando con tecnologías modernas para crear soluciones
                      eficientes, escalables y seguras.`}
          />
          <a href='./cv.pdf' target='_blank'>
            <Button >
              <DownloadIcon name="arrow" size={20} />
              <Text p="CV" />
            </Button>
          </a>
        </BackgroundWhite>
        <BackgroundGreyStyle>
          <StyledImage src={Photo} alt="logo" />
        </BackgroundGreyStyle>
      </div>
    </SectionStyle>
  )
}

export default SectionOne