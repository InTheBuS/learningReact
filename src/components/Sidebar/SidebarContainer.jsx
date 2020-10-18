import React from 'react';
import Sidebar from "./Sidebar";
import {connect} from "react-redux";
/*

const SidebarContainer = () => {

    return (
        <StoreContext>
            {
                (store) => {
                    let state = store.getState()

                    return (
                        <Sidebar side={state.sideBar.wholeBar} myFriends={state.sideBar.friends}/>
                    );
                }
            }
        </StoreContext>)
}
*/


let mapStateToProps = (state) => {
    return {
        side: state.sideBar.wholeBar,
        myFriends: state.sideBar.friends
    }
}

let mapDispatchToProps = () => {
    return {

    }
}

const sideBarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default sideBarContainer;

