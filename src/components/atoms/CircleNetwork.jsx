import PropTypes from "prop-types";
import styled from "styled-components"

const CircleNetworkStyle = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 25%;
    align-items: center;
    margin: auto;
    justify-content: center;
    background-color: ${props => props.theme.SecondaryColor};
    cursor: pointer;

    &:hover {
      background-color: ${props => props.theme.QuaternaryColor};
      transition: all 0.5s;
      border-radius: 50%;
      
    }
`

const CircleNetwork = ({ children }) => {
  return <CircleNetworkStyle>{children}</CircleNetworkStyle>;
};

CircleNetwork.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CircleNetwork