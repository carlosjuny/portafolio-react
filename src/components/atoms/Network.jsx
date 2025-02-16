import PropTypes from "prop-types"
import styled from "styled-components"

const NetworkStyle = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  margin: auto;
  justify-content: center;
 /* margin-top: 60px;
  right: 20px;*/
  gap: 20px; 

  @media (min-width: 768px) {
    width: 25%;
  }

  @media (min-width: 1024px) {
    width: 20%;
  }

  @media (min-width: 1440px) {
    width: 15%;
  }
`;

const Network = ({ children }) => {
  return  <NetworkStyle>{children}</NetworkStyle>
  
}

Network.propTypes = {
    children: PropTypes.node.isRequired
};

export default Network;