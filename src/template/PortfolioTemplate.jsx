import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/organisms/Header';
import SectionOne from '../components/organisms/SectionOne';
import SectionTwo from '../components/organisms/SectionTwo';
import SectionTree from '../components/organisms/SectionTree';
import SectionFour from '../components/organisms/SectionFour';
import Footer from '../components/organisms/Footer';

const PortfolioStyle = styled.div`
  background-color: ${props => props.theme.PrimaryColor};
  width: 100%;
  height: 100%;
`;

const PortfolioTemplate = ({ section }) => {
  const sobreMiRef = useRef(null);
  const habilidadesRef = useRef(null);
  const proyectosRef = useRef(null);
  const contactoRef = useRef(null);

  useEffect(() => {
    if (section === 'sobre-mi' && sobreMiRef.current) {
      sobreMiRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'habilidades' && habilidadesRef.current) {
      habilidadesRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'proyectos' && proyectosRef.current) {
      proyectosRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contacto' && contactoRef.current) {
      contactoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [section]);

  return (
    <PortfolioStyle>
      <Header />
      <div ref={sobreMiRef}>
        <SectionOne />
      </div>
      <div ref={habilidadesRef}>
        <SectionTwo />
      </div>
      <div ref={proyectosRef}>
        <SectionTree />
      </div>
      <div ref={contactoRef}>
        <SectionFour />
      </div>
      <Footer />
    </PortfolioStyle>
  );
};

PortfolioTemplate.propTypes = {
  section: PropTypes.node,
};

export default PortfolioTemplate;
