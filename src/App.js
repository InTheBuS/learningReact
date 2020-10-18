import React from 'react';
import './App.css';
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import FriendsContainer from "./components/Content/Users/UsersContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Content/Login/Login";
import NewsContainer from "./components/Content/News/NewsContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/AppReducer";
import Loader from "./components/common/Loader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    componentWillMount() {
        console.log()
    }

    render() {
        if(!this.props.initialized) {
            return <Loader />
        }

        return (
            <div className='myApp'>
                <HeaderContainer/>
                <SidebarContainer/>
                <div className='myApp-content'>
                    <Route path='/profile/:userId?'
                           render={() =>
                               <ProfileContainer/>}/>
                    <Route path='/messages'
                           render={() =>
                               <DialogsContainer/>}/>
                    <Route path='/news'
                           render={() =>
                               <NewsContainer/>}/>
                    <Route path='/music'
                           render={Music}/>
                    <Route path='/settings'
                           render={Settings}/>
                    <Route path='/users'
                           render={() =>
                               <FriendsContainer/>}/>
                    <Route path='/login'
                           render={() =>
                               <Login/>
                           }/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
