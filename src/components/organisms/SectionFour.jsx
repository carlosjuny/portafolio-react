import styled from "styled-components";
import BackgroundGrey from "../atoms/BackgroundGrey";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import SvgIcon from "../atoms/SvgIcon";
import TitleBackground from "../moleculs/TitleBackground";

const Sectionstyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.PrimaryColor};
`;

const StyleText = styled(Text)`
    h1 {
        position: absolute;
        right: 13%;
        margin-top: 70px;
        font-size: 50px;
    }
`

const BackgroundGreyStyle = styled(BackgroundGrey)`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background-color: ${props => props.theme.QuinaryColor};
    padding: 50px;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 100px;

    .Input {
        width: 100%;
    }
    .Textarea {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    svg.injected-svg {
    width: 100%;
    height: auto;
}
    
    @media (min-width: 1024px) {
        flex-direction: row;
        gap: 50px;

        .Textarea {
            position: relative;
            top: -45px;
            align-items: center;
            justify-content: center;
            margin: auto;
            align-self: center;
        }
    }
`

const ButtonStyle = styled(Button)`
    width: 100%;
    left: 0;

    @media (min-width: 1024px) {
        top: 40px;
    }

    &:hover {
        h2 {
          color: ${props => props.theme.SecondaryColor};
          transition: all 0.3s ease-in-out;
        }
        color: white;
    }
`

const SendIcon = styled(SvgIcon)`
    position: relative;
    left: 50px;
`;

const ContactIcon = styled(SvgIcon)`
    position: relative;
    width: 80px;
    height: 100px;
    top: 5px;

    @media (min-width: 1024px) {
    width: 350px;
    height: 350px;
    }
`

const SectionFour = () => {
  return (
    <Sectionstyle>
        <TitleBackground color='#3A3A3A'>
            <StyleText h1='Contacto'/>
        </TitleBackground>
        <BackgroundGreyStyle>
            <div className="Input">
                <Input placeholder='Nombre' />
                <Input placeholder='Correo' />
                <Textarea placeholder='Mensaje'/>
            </div>
            <div className="Textarea">
                <ContactIcon name='contact' size={50}/>
                <ButtonStyle>
                    <Text h2="Enviar" />
                    <SendIcon name="arrow" size={25} />
                </ButtonStyle>
            </div>
        </BackgroundGreyStyle>
    </Sectionstyle>
  )
}

export default SectionFour