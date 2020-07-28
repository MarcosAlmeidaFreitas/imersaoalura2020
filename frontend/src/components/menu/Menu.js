import React from 'react';
import aluraLogo from '../../assets/img/aluralogo.png' 
import './Menu.css'
//import ButtonLink from "./components/buttonLink/ButtonLink";
import Button from '../button/Button'

function Menu(){
    return (
        <nav className = "Menu" >
            <a href = "/">
                <img src = {aluraLogo} className = "Logo" alt = "Logo da AluraFlix"></img>
            </a>

            <Button as= "a" className = "ButtonLink" href = "/" >
                tag especifica children
            </Button>
        </nav>);
}

export default Menu;