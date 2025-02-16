import PropTypes from "prop-types"
import styled from "styled-components"

const TextareaStyle = styled.textarea`
    width: 100%;
    height: 250px;
    padding: 10px;
    background-color: ${props => props.theme.TertiaryColor};
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    font-size: 16px;
    font-family: 'Offside';
    outline: none;
    color: ${props => props.theme.SecondaryColor};
    resize: none;

    &::placeholder {
        color: ${props => props.theme.SecondaryColor};
        opacity: 0.7;
    }
`

const Textarea = ({ placeholder }) => {
  return (
    <TextareaStyle placeholder={placeholder}/>
  )
}

Textarea.propTypes = {
  placeholder: PropTypes.string
};

export default Textarea;
