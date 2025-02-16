import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageStyle = styled.img`
    width: 130px;
    height: 130px;
`;

const Image = ({ src, alt, className }) => {
  return <ImageStyle src={src} alt={alt} className={className} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Image;
