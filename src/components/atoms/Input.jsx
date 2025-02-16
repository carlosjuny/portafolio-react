import PropTypes from "prop-types"
import styled from "styled-components"

const InputStyle = styled.input`
    width: 100%;
    height: 60px;
    margin-bottom: 15px;
    padding: 10px;
    background-color: ${props => props.theme.TertiaryColor};
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    font-size: 16px;
    color: ${props => props.theme.SecondaryColor};
    outline: none;
    font-family: 'Offside';

    &::placeholder {
        color: ${props => props.theme.SecondaryColor};
        opacity: 0.7;
    }
`

const Input = ({ placeholder }) => {
  return (
    <InputStyle placeholder={placeholder} />
  )
};

Input.propTypes = {
  placeholder: PropTypes.string
};

export default Input