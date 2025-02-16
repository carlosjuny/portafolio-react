import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
// import Text from "./Text";

const glowing = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const CardBox = styled.div`
  width: 180px;
  height: 250px;
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,
    rgba(0, 0, 0, 0.5) 0px 2px 25px 0px;

    @media (min-width: 1024px) {
      width: 22vw;
      height: 40vh;
    }

  &::before {
    content: "";
    position: absolute;
    width: 40%;
    height: 100vh;
    background: linear-gradient(to right, #BB662A, #3A3A3A, #BB662A);
    animation: ${glowing} 5s linear infinite;
    transform-origin: center;
  }
`;

const Card = styled.div`
  position: absolute;
  width: 98%;
  height: 98%;
  background: #333333;
  border-radius: 20px;
  /* z-index: 5; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #ffffff;
  overflow: hidden;
  padding: 20px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.5) 0px 18px 36px -18px inset;

  h2 {
    position: absolute;
    /* top: 50%;
    left: 50%; */
    /* transform: translate(-50%, -50%); */
    font-size: 10px;
    pointer-events: none;
    opacity: 0.1;
    font-family: 'NicoMoji';
  }

  .content {
    transform: translateY(100%);
    opacity: 0;
    transition: 0.3s ease-in-out;
    font-size: 1.6rem;
    line-height: 25px;
    display: grid;
    grid-template-columns: 2fr 2fr;
  }

  &:hover .content {
    transform: translateY(0);
    opacity: 1;
  }
`;

const SkillCard = ({ children, className, h2 }) => {
  return (
    <CardBox className={className}>
      <Card>
        {h2 && <h2>{h2}</h2>}
        <div className="content">{children}</div>
      </Card>
    </CardBox>
  );
};

SkillCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  h2: PropTypes.string,
};

export default SkillCard;
