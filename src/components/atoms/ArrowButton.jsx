import PropTypes from "prop-types";
import styled from "styled-components";

const StyledArrowButton = styled.button`
  position: absolute;
  width: 80px;
  height: 40px;
  background-color: ${(props) => props.theme.QuaternaryColor};
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;
  /* z-index: 10; */

  /* &:hover {
      transform: scale(1.1);
      box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.5);
    }
   */
`;

const ArrowButton = ({ onClick, children, className }) => {
  return (
    <StyledArrowButton onClick={onClick} className={className}>
      {children}
    </StyledArrowButton>
  );
};

ArrowButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ArrowButton;
