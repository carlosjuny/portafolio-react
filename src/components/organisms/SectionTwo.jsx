import skill from "../../assets/image/skills.png";
import Image from "../atoms/Image";
import styled from "styled-components";
import Text from "../atoms/Text";
import SvgIcon from "../atoms/SvgIcon";
import BackgroundGrey from "../atoms/BackgroundGrey";
import TitleBackground from "../moleculs/TitleBackground";
import Card from "../atoms/card";

const Sectionstyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .containerSkill {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        @media (min-width: 1024px) {
            flex-direction: row;
        }
    }

    .skill {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: auto;
        gap: 10px;
        top: 40px;
        position: relative;
        flex-wrap: wrap;

        @media (min-width: 1024px) {
            flex-direction: row;
            left: 0%;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 40px;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        @media (min-width: 1440px) {
            gap: 60px;
        }
    }
`;

const BackgroundGreyStyle = styled(BackgroundGrey)`
    background-color: ${(props) => props.theme.TertiaryColor};
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    .SkillStyle {
        display: flex;
        flex-direction: column;
        margin: auto;
        text-align: center;
        gap: 20px;

        h2 {
            font-size: 25px;
        }

    }

    @media (min-width: 1024px) {
        height: 80vh;
        display: flex;
        flex-direction: row;
        grid-template-columns: auto;
    }

    .text {
        position: absolute;
        display: flex;
        align-self: center;
        width: 100%;
        left: -55px;
    }
`;

const StyledImage = styled(Image)`
    position: absolute;
    right: 0;
    width: 140px;
    height: 200px;

    @media (min-width: 1024px) {
        width: 250px;
        height: 300px;
    }

`;

const StyledText = styled(Text)`
    h1 {
        position: absolute;
        display: flex;
        margin: auto;
        margin-top: 100px;
        font-size: 50px;
        right: 8%;
    }

    p {
        color: ${props => props.theme.SecondaryColor};
        font-size: 14px;

        @media (min-width: 1024px) {
            font-size: 16px;
        }
    }
    
`;

const backgrounds = {
    figma: "rgba(242, 78, 30, 0.2)",
    photoshop: "rgba(38, 77, 228, 0.2)",
    illustrator: "rgba(255, 102, 51, 0.2)",
    phyton: "rgba(247, 223, 30, 0.2)",
    css: "rgba(38, 77, 228, 0.2)",
    javascript: "rgba(247, 223, 30, 0.2)",
    nodejs: "rgba(140, 200, 75, 0.2)",
    postgres: "rgba(51, 103, 145, 0.2)",
    react: "rgba(97, 218, 251, 0.2)",
    mysql: "rgba(143, 52, 0, 0.2)",
    typescript: "rgba(219, 219, 219, 0.2)",
    odoo: "rgba(161, 91, 182, 0.2)",
    html: "rgba(255, 102, 51, 0.2)",
    wordpress: "rgba(33, 117, 155, 0.2)"
};

const SvgIconStyle = styled(SvgIcon)`
    svg { width:60px;
    height: 60px;
    position: relative;
    left: 5%;
    transition: transform 0.3s, box-shadow 0.3s ease, background 0.3s ease;
    padding: 10px;
    border-radius: 45%;
    }

    @media (min-width: 1024px) {
        svg {width: 80px;
        height: 80px;
        left: 0;
        }
    }

    &:hover {
        svg { transform: scale(1.1);
        cursor: pointer;
        background: ${(props) => backgrounds[props.name] || "rgba(0, 0, 0, 0.1)"};
        box-shadow: 0px 4px 15px ${(props) => backgrounds[props.name] || "rgba(0, 0, 0, 0.3)"};
        }
    }
`;



const SectionTwo = () => {
    return (
        <Sectionstyle>
            <TitleBackground color="#3A3A3A">
                <StyledText h1="Habilidades" />
                <StyledImage src={skill} alt="logo" />
            </TitleBackground>
            <BackgroundGreyStyle>
                <div className="SkillStyle">
                    <Text h2='Diseño'/>
                    <Card h2='Diseño'>
                        <SvgIconStyle name='figma' />
                        <SvgIconStyle name='wordpress'/>
                        <SvgIconStyle name='photoshop' />
                        <SvgIconStyle name='illustrator' />
                    </Card>
                </div>
                <div className="SkillStyle">
                    <Text h2='Frontend'/>
                    <Card h2='Frontend'>
                        <SvgIconStyle name='html' />
                        <SvgIconStyle name='css' />
                        <SvgIconStyle name='javascript' />
                        <SvgIconStyle name='typescript' />
                        <SvgIconStyle name='react' />
                    </Card>
                </div>
                <div className="SkillStyle">
                    <Text h2='Backend'/>
                    <Card h2='Backend'>
                        <SvgIconStyle name='nodejs' />
                        <SvgIconStyle name='phyton' />
                        <SvgIconStyle name='odoo' />
                        <SvgIconStyle name='postgres' />
                        <SvgIconStyle name='mysql'/>
                    </Card>
                </div>
                <div className="SkillStyle">
                    <Text h2='Blandas'/>
                    <Card h2='Habilidades blandas'>
                        <div className="text">
                            <StyledText p='Tengo habilidad para trabajar y desenvolverme en equipo,
                            y en mi vida personal me gusta leer libros y hacer deporte.'/>
                        </div>
                    </Card>
                </div>
        </BackgroundGreyStyle>
        </Sectionstyle>
    );
};

export default SectionTwo;
