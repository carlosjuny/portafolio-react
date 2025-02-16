import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioTemplate from './template/PortfolioTemplate';
import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Color } from './theme/ThemeStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Color}>
        <Router>
          <Routes>
            <Route path="/" element={<PortfolioTemplate />} />
            <Route path="/sobre-mi" element={<PortfolioTemplate section="sobre-mi" />} />
            <Route path="/habilidades" element={<PortfolioTemplate section="habilidades" />} />
            <Route path="/proyectos" element={<PortfolioTemplate section="proyectos" />} />
            <Route path="/contacto" element={<PortfolioTemplate section="contacto" />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
