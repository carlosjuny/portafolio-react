import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyle = styled.button`
    position: relative;
    top: 20%;
    left: 10%;
    width: 200px;
    height: 50px;
    background-color: ${props => props.theme.QuaternaryColor};
    border-radius: 5px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    padding-top: -15px;

    &:hover {
        background-color: ${props => props.theme.TertiaryColor};
        p {
          color: ${props => props.theme.SecondaryColor};
          transition: all 0.3s ease-in-out;
        }
        color: white;
    }

    @media (min-width: 768px) {
      top: 20%;
      left: 10%;
    }

    @media (min-width: 1024px) {
      top: 30%;
    }

`;

const Button = ({children, className}) => {
  return (
    <ButtonStyle className={className}>
      {children}
    </ButtonStyle>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
