import PropTypes from "prop-types";
import styled from "styled-components";

const TitleBackgroundStyle = styled.div`
  display: flex;
  width: 100%;
  height: 25vh;

  @media (min-width: 1024px) {
  background: ${(props) =>
    props.color
      ? props.color
      : `linear-gradient(to right, ${props.leftColor} 50.01%, ${props.rightColor} 50%)`};
  }
`;

const TitleBackground = ({ children, color, leftColor, rightColor }) => {
  return (
    <TitleBackgroundStyle color={color} leftColor={leftColor} rightColor={rightColor}>
      {children}
    </TitleBackgroundStyle>
  );
};

TitleBackground.defaultProps = {
  color: null,
  leftColor: "#3A3A3A",
  rightColor: "#FFFFFF",
};

TitleBackground.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string, 
  leftColor: PropTypes.string,
  rightColor: PropTypes.string,
};

export default TitleBackground;
