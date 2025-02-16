import styled from 'styled-components';
import Text from '../atoms/Text';

const Card = styled.div`
  position: relative;
  width: 190px;
  height: 100px;
  padding: 0.5rem;
  left: 0px;
  background: rgba(198, 198, 198, 0.34);
  border-radius: 8px;
  margin: auto;
  top: -10px;
  backdrop-filter: blur(5px);
  border-bottom: 3px solid rgba(255, 255, 255, 0.44);
  border-left: 2px rgba(255, 255, 255, 0.545) outset;
  box-shadow: -40px 50px 30px rgba(0, 0, 0, 0.28);
  transform: skewX(10deg);
  transition: 0.4s;
  overflow: hidden;
  color: white;
  &:hover {
    height: 305px;
    transform: skew(0deg);

    @media (min-width: 1024px) {
      height: 290px;
    }
  }

  @media (min-width: 1024px) {
    top: 0px;
    width: 220px;
  }

  @media (min-width: 1440px) {
    width: 305px;
  }
`;

const Align = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-self: flex-start;
`;

const Circle = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
  background-color: ${(props) => props.color};
`;

const StyleText = styled(Text)`
  text-align: center;
  margin: 1.3rem;
  color: rgb(218, 244, 237);
  text-shadow: -10px 5px 10px rgba(0, 0, 0, 0.573);
  h1 {
    font-size: 20px;
    color: ${props => props.theme.PrimaryColor};
    margin-top: -15%;
  }
`;


const HoverCard = () => {
  return (
    <Card>
      <Align>
        <Circle color="#ff605c" />
        <Circle color="#ffbd44" />
        <Circle color="#00ca4e" />
      </Align>
      <StyleText h1='Habilidades Blandas' />
      <StyleText p='Tengo habilidad para trabajar y desenvolverme en equipo, y en mi vida personal me gusta el leer libros y hacer deporte' />
    </Card>
  );
};

export default HoverCard;
