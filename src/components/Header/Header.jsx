import React from 'react';
import HeadCss from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={HeadCss.header}>
            <img src='https://sun9-66.userapi.com/c855616/v855616743/10a159/wggjJRPxuOc.jpg'/>
            <div className={HeadCss.loginBlock}>
                {props.isAuth ? props.login:
                <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>);

}

export default Header;