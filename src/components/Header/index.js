import React, {useState} from "react";
import './styles.css';

const Header = () => {

    const [active, setActive] = useState(false);
    const [activeMenu, setActiveMenu] = useState("container--menu not-active-menu");
    const [menuIcon, setMenuIcon] = useState("btn not-active");

    const handleActiveMenu = () => {
        setActive(!active);
        setActiveMenu(active ? "container--menu active-menu" : "container--menu not-active-menu")
        setMenuIcon(active ? "btn active" : "btn not-active")
    }

    return (
        <header>  
            <div className="container--logo">
                <p>Meu<span>Odonto</span></p>
            </div>

            <div className="box">
                <div className={menuIcon} onClick={() => handleActiveMenu()}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>

            <div className={activeMenu}>
                
                <ul className="menu">
                    <li className="items">
                        <a href='#home'>Início</a>
                    </li>
                    <li className="items">
                        <a href='#'>Sobre nós</a>
                    </li>
                    <li className="items">
                        <a href='#'>Benefícios</a>
                    </li>
                    <li className="items">
                        <a href='#'>Planos</a>
                    </li>
                    <li className="items ">
                        <a href='#' className="contact">Contato</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;