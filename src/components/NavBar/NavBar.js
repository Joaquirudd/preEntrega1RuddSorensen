import { NavLink } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";



const NavBar = () => {
    return <div className = "NavBar" >
        <div className='MenuNavBar'>
          <h1 className='TituloMenuNavBar'> Pastelería "Medialuncitas" </h1>

          <nav className='IconosNavBar'>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/comida/dulce">Dulce</NavLink>
                </li>
                <li>
                    <NavLink to="/comida/salado">Salado</NavLink>
                </li>
                <li>
                    <NavLink to="/carrito"><CartWidget/></NavLink>
                </li>
            </ul>
          </nav>
          </div>  
    </div>;
};

export default NavBar;