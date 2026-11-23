import reactLogo from '../assets/react.svg';
import '../stylesheets/Navbar.css';

export default function Navbar(){
    return (
        <header>
            <nav>
                <img src={reactLogo} alt="React Logo"></img>
                <span>React Facts</span>
            </nav>
        </header>
    )
}
