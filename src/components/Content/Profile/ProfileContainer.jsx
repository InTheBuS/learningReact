import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getProfile, updateStatus} from '../../../redux/ProfileReducer';
import {withRouter} from 'react-router-dom';
import {AuthRedirectComponent} from "../../../hoc/AuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId, this.props.authorizedUserId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    AuthRedirectComponent,
    connect(mapStateToProps, {getProfile, updateStatus}),
    withRouter,
)
(ProfileContainer)