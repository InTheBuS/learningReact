import React from 'react';
import {connect} from 'react-redux';
import {
    toggleFollowingInProgress,
    requestUsers, onChangePage, followingUser, unFollowingUser
} from '../../../redux/UsersReducer';
import {getUsers} from './../../../redux/UsersSelectors'
import User from "./Users";
import Loader from './../../common/Loader'
import {countUsers, currentPage, followingInProgress, isFetched, pageSize} from "../../../redux/UsersSelectors";

class friendsContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
        /*this.props.onIsFetched(true)

        API.settingUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.onIsFetched(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })*/
    }

    onChangePage = (page) => {
        this.props.onChangePage(page, this.props.pageSize)
        /*this.props.setCurrentPage(page)
        this.props.onIsFetched(true)

        API.settingUsers(page, this.props.pageSize)
            .then(data => {
                this.props.onIsFetched(false)
                this.props.setUsers(data.items)
            })*/
    }

    render() {
        let pagesCount = Math.ceil(this.props.countUsers / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (

            <>
                {this.props.isFetched
                    ? // -- чтоб виднее было
                    <Loader/>
                    : // -- чтоб виднее было
                    <User followingUser={this.props.followingUser}
                          unFollowingUser={this.props.unFollowingUser}
                          pages={pages}
                          users={this.props.users}
                          onChangePage={this.onChangePage}
                          currentPage={this.props.currentPage}
                          followingInProgress={this.props.followingInProgress}/>
                }
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    users: getUsers(state),
    countUsers: countUsers(state),
    pageSize: pageSize(state),
    currentPage: currentPage(state),
    isFetched: isFetched(state),
    followingInProgress: followingInProgress(state)
})

const usersContainer = connect(mapStateToProps, {
    toggleFollowingInProgress,
    requestUsers,
    onChangePage,
    followingUser,
    unFollowingUser
})(friendsContainer);

export default usersContainer