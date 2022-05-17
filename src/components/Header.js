import logo from '../images/header-logo.svg';

function Header() {
    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="Логотип mestro"/>
        </header>
    )
}

export default Header