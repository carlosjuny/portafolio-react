import styled from 'styled-components'
import TriangleLogo from '../atoms/TriangleLogo'

const Navbar = styled.div`
    position: fixed;
    width: 100%;
    height: 12vh;
    background-color: ${props => props.theme.SecondaryColor};
    z-index: 4;

    @media (min-width: 1024px) {
      width: 50%;
      height: 12vh;
      position: relative;
    }
`

const nav = () => {
  return (
    <Navbar>
        <TriangleLogo />
    </Navbar>
  )
}

export default nav
