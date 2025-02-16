import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuStyle = styled.menu`
    position: fixed;
    top: ${props => (props.open ? '86px' : '-50vh')};
    width: 100%;
    height: 55vh;
    left: 0;
    padding: 5px;
    background-color: ${props => props.theme.QuaternaryColor};
    transition: top 0.5s ease-in-out;
    z-index: 3;
    
    .menuItem {
        justify-content: center;
        color: ${props => props.theme.SecondaryColor};
    }
    .item {
        position: relative;
        text-align: center;
        top: 60px;
        padding-top: 30px;
        margin: 10px;
        font-family: 'Offside', sans-serif;
        cursor: pointer;
        z-index: 8;

        @media (min-width: 1024px) {
            top: 0;
        }
    }

    a{
        color: ${props => props.theme.SecondaryColor};
    }
    
    @media (min-width: 1024px) {
        position: static;
        width: auto;
        height: auto;
        background: none;
        border-radius: 0;

        ul {
            display: flex;
            gap: 20px;
        }
    }

    @media (min-width: 1024px) {
        display: block;
        justify-content: center;
        margin-top: -80px;

        .home {
        color: ${props => props.theme.QuaternaryColor};
    }
    }
`;

const ToggleButton = styled.button`
    position: fixed;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 6;

    div {
        width: 30px;
        height: 4px;
        background-color: ${props => props.theme.QuaternaryColor};
        margin: 3px 0;
        transition: transform 0.3s, opacity 0.3s;
        border-radius: 2px;
    }

    &.open div:nth-child(1) {
        transform: rotate(45deg) translate(9px, 5px);
        z-index: 1;
        background-color: ${props => props.theme.PrimaryColor};
    }
    &.open div:nth-child(2) {
        opacity: 0;
        background-color: ${props => props.theme.PrimaryColor};
    }
    &.open div:nth-child(3) {
        width: 30px;
        left: 0px;
        transform: rotate(-45deg) translate(9px, -5px);
        z-index: 1;
        background-color: ${props => props.theme.PrimaryColor};
    }

    .Toogle2 {
        position: relative;
        width: 20px;
        left: -5px;
        background-color: ${props => props.theme.PrimaryColor};
    }

    .Toogle3 {
        position: relative;
        width: 15px;
        left: -8px;
    }

    @media (min-width: 1024px) {
        display: none;
    }
`;

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleItemClick = () => {
        setMenuOpen(false);
    };
    
    return (
        <>
            <ToggleButton className={menuOpen ? 'open' : ''} onClick={() => setMenuOpen(!menuOpen)}>
                <div className='Toogle1'></div>
                <div className='Toogle2'></div>
                <div className='Toogle3'></div>
            </ToggleButton>
            <MenuStyle open={menuOpen}>
                <ul className='menuItem'>
                    <li className='item'><Link className='home' to="/sobre-mi" onClick={handleItemClick}>Sobre mí</Link></li>
                    <li className='item'><Link className='home' to="/habilidades" onClick={handleItemClick}>Habilidades</Link></li>
                    <li className='item'><Link to="/proyectos" onClick={handleItemClick}>Proyectos</Link></li>
                    <li className='item'><Link to="/contacto" onClick={handleItemClick}>Contacto</Link></li>
                </ul>       
            </MenuStyle>
        </>
    );
};

export default Menu;
