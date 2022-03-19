import { 
    HeaderContainer,
    H1,
    AddIconContainer,
  } from '../styles/header';
  import { MdAddCircle } from 'react-icons/md';
import logo from '../assets/logo.svg'

const Header = ({ open, setOpen, action, setAction }) => {
  const handleAddBookOnClick = () => {
    setOpen(true);
    setAction("add");
  };

  return (
      <HeaderContainer>
        <img src={logo} style={{width: '5rem'}}/>
        <H1>Bookshop</H1>
        <AddIconContainer onClick={() => handleAddBookOnClick()}>
          <MdAddCircle style={{
            color: 'rgba(0, 149, 64, 1)',
            width: '1.5rem',
            fontSize: '2rem'
            }}
          />
        </AddIconContainer>
      </HeaderContainer>
  )
}

export default Header;