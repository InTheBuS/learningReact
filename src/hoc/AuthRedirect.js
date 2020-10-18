import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Loader from "../components/common/Loader";
import {initializeApp} from "../redux/AppReducer";

let mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth,
    isFetched: state.auth.isFetched
})

export const AuthRedirectComponent = (Component) => {

    class RedirectComponent extends React.Component {

        componentDidMount() {
            this.props.initializeApp()
        }

        render() {
            if (!this.props.isAuth && !this.props.isFetched) {
                console.log(this.props + '-----------')
                return <Loader/>
            } else if (this.props.isAuth && this.props.isFetched) {
                return <Component {...this.props}/>
            } else if (!this.props.isAuth && this.props.isFetched) {
                return <Redirect to='/login'/>
            }
        }
    }


    return connect(mapStateToPropsRedirect, {
        initializeApp
    })(RedirectComponent)

}

