import styled from 'styled-components'
import Navbar from '../moleculs/Navbar'
import Menu from '../atoms/Menu'

const HeaderStyle = styled.div`
    width: 100%;
    height: 10vh;
    background: none;
`

const Header = () => {
  return (
    <HeaderStyle>
        <Navbar />
        <Menu />
    </HeaderStyle>
  )
}

export default Header
