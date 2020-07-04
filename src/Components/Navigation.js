import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import NavigationMenu from './NavigationMenu';


function Navigation() {
    const [showMenu, setshowMenu] = useState(false);

    const maskTransitions = useTransition(showMenu, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    return (
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon
                 icon={faBars}
                 onClick={() => { setshowMenu(!showMenu ) }}
                  />
            </span>
            {
                maskTransitions.map(({ item, key, props }) =>
                item && 
                <animated.div className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50" key={key} style={props}
                onClick={() => {setshowMenu(false)}}
                >
                </animated.div>
                )
            }

            {
                menuTransitions.map(({ item, key, props }) =>
                item && 
                <animated.div className="p-3 fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow" key={key} style={props}>
                    <NavigationMenu
                        closeMenu={() => { setshowMenu(!showMenu ) }}
                    />
                </animated.div>
                )
            }
        </nav>
    )
}

export default Navigation;