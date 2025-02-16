import styled from 'styled-components';
import PropTypes from 'prop-types';

const BackgroundWhiteStyle = styled.div`
  background-color: ${(props) => props.theme.SecondaryColor};
  width: 100%;
  height: 70vh;
  border-bottom-right-radius: 150px;

  @media (min-width: 1024px) {
    width: 100%;
    height: 85vh;
  }
`;

const BackgroundWhite = ({ children, className }) => {
  return <BackgroundWhiteStyle className={className}>{children}</BackgroundWhiteStyle>;
};

BackgroundWhite.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default BackgroundWhite;
