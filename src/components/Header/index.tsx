import Beaker from "../Icons/Beaker";
import './Header.css'

const Header = () => {
  return (
    <header className='flex p-4'>
      <a href="/">
        <Beaker />
      </a>
    </header>
  );
}

export default Header;