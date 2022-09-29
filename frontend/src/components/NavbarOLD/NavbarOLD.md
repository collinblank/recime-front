import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

function Navbar(){

//set initial state to false.  Once menu button is clicked we can call the updater function, setNavbarOpen to update the state.  
    const [navbarOpen, setNavbarOpen] = useState(false)

//handler to handle toggle of hamburger menu:
const handleToggle = () => {
    setNavbarOpen(prev => !prev)
}

//close the menu:
const closeMenu = () => {
    setNavbarOpen(false)
}

const links = [
    {
        id: 1,
        path: '/',
        text: 'Home'
    },
    {
        id: 2,
        path: '/add',
        text: 'Add Recipe'
    }
]

// if the value is true, we display "close", else we display "open".
return (

    <nav className="col-4 navBar">
        <button onClick={handleToggle}>{navbarOpen ? (
        <MdClose id="close-button" style={{ color: '#fd1f4a', width: "40px", height: "40px" }} />
        ) : (
            <FiMenu style={{ color: '#fd1f4a', width: '40px', height: '40px'}} />
        )}</button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : " "}`}>
            {links.map(link => {
                return (<li key={link.id}>
                    <NavLink to={link.path} activeclassname="active-link" onClick={() => closeMenu()} exact>
                        {link.text}
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    </nav>
)

}

export default Navbar;