import React from 'react';
import { Link } from 'react-router-dom';

function NavigationMenu(props) {
    return (
        <div>
            <div className="font-bold py-3">
                AppName
            </div>
            <hr/>
            <ul>
                <li>
                    <Link 
                    to="/" 
                    onClick={props.closeMenu}
                    className="text-blue-500 block py-3 border-t border-b">
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                    to="/about" 
                    onClick={props.closeMenu}
                    className="text-blue-500 block py-3  border-b">
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu;