import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextStyle = styled.div`
    color: ${props => props.theme.PrimaryColor};

    p {
        font-size: 16px;
        font-family: 'Offside', sans-serif;
        color: ${props => props.theme.PrimaryColor};
    }

    h1 {
        font-size: 70px;
        font-family: 'NicoMoji', sans-serif;
        color: ${props => props.theme.QuaternaryColor};
    }

    h2 {
        font-size: 20px;
        font-family: 'NicoMoji', sans-serif;
    }
`;

const Text = ({ p, h1, h2, className }) => {
  return (
    <TextStyle className={className}>
      {p && <p>{p}</p>}
      {h1 && <h1>{h1}</h1>}
      {h2 && <h2>{h2}</h2>}
    </TextStyle>
  );
};

Text.propTypes = {
  p: PropTypes.string,
  h1: PropTypes.string,
  h2: PropTypes.string,
  className: PropTypes.string,
};

export default Text;
