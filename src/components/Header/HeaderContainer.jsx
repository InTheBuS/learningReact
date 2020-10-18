import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {isLogged} from '../../redux/AuthReducer';


class HeaderContainer extends React.Component {



    render() {

        return <Header {...this.props} /*login={this.props.login}*//>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {isLogged})(HeaderContainer);