import React, {useState} from 'react'
import {FaBattleNet} from 'react-icons/fa'
import {FiMenu, FiX} from 'react-icons/fi'

import './Header.css'

function Header() {
    const [click, setClick] = useState(false);
    const toggleMenuBtn = () => { setClick(!click); }
    const closeMenuHeader = () => { setClick(false); }

    return (
        <div className="container header">
            <div className="container-center">
                <div className="container-header">
                    <div className="container-logo">
                        <FaBattleNet /> React
                    </div>
                    <div className={click ? 'container-menu active' : 'container-menu hide'}>
                        <ul className="menu">
                            <li className="menu-link">
                                <a href="#" onClick={() => closeMenuHeader()}>Home</a>
                            </li>
                            <li className="menu-link">
                                <a href="#" onClick={() => closeMenuHeader()}>About</a>
                            </li>
                            <li className="menu-link">
                                <a href="#" onClick={() => closeMenuHeader()}>Contact us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-mobile-icon" onClick={() => toggleMenuBtn()}>
                        { click ? (
                            <FiX />
                        ) : (
                            <FiMenu />
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
