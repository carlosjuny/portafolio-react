import styled from 'styled-components';
import logoImage from '../../assets/image/logo_carlos.png';
import Image from './Image';

const TriangleLogoStyle = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    left: 60px;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
    border-top: 90px solid ${props => props.theme.TertiaryColor};

    @media (min-width: 1024px) {
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
        border-top: 160px solid ${props => props.theme.TertiaryColor};
    }
`;

const ImageStyle = styled(Image)`
  position: absolute;
  width: 130px;
  height: 130px;
  top: -125px;
  left: -65px;

  @media (min-width: 1024px) {
    width: 200px;
    height: 200px;
    top: -200px;
    left: -100px;
  }
`

const TriangleLogo = () => {
  return (
    <TriangleLogoStyle>
        <ImageStyle src={logoImage} alt="logo" />
    </TriangleLogoStyle>
  );
}

export default TriangleLogo;
