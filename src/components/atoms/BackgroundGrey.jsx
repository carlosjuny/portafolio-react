import styled from "styled-components";
import PropTypes from "prop-types";

const BackgroundGreyStyle = styled.div`
    background-color: ${props => props.theme.PrimaryColor};
    width: 100%;
    height: 70vh;

    @media (min-width: 1024px) {
        height: 50vw;
        height: 85vh;
    }
`;

const BackgroundGrey = ({ children, className }) => {
    return <BackgroundGreyStyle className={className}>{children}</BackgroundGreyStyle>;
  };
  
  BackgroundGrey.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };
  

export default BackgroundGrey