import Button from "../UI/Button";
import logo from "/src/assets/logo.jpg";
const Header = () => {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="logo image"/>
                <h1>Quick Food </h1>
            </div>
            <Button textOnly >Cart(0)</Button>

        </header>
    )
}

export default Header;
