import React from 'react';
import BarCss from './Sidebar.module.css'
import Bar from "./BarItems/BarItems";
import Friend from "./BarItems/FriendItem";

const Sidebar = (props) => {

    let side = props.side
        .map(bar =>
            <Bar className={BarCss.item} nav={bar.nav} name={bar.name} activeClassName={BarCss.active}/>)

    let myFriends = props.myFriends
        .map(friend =>
            <Friend src={friend.src} name={friend.name}/>)

    return (
        <sidebar className={BarCss.sidebar}>
            <div>
                {side}
            </div>
            <div className={BarCss.friends}>
                {myFriends}
            </div>
        </sidebar>);
}

export default Sidebar;

