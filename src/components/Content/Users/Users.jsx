import React from 'react';
import FriendsCss from './Users.module.css';
import noPhoto from './../../../subjects/WithoutPhoto/e09HHwnXdP8.jpg'
import {NavLink} from 'react-router-dom';

const User = (props) => {
    return (
        <div>
            {props.pages.map(page => {
                return (
                    <span className={props.currentPage === page && FriendsCss.active}
                          onClick={() => {
                              props.onChangePage(page)
                          }}>{page}</span>
                )
            })}
            <div>
                {props.users.map(user => {
                    return (
                        <div key={user.id}>
                            <div className={FriendsCss.friend}>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img src={user.photos.small != null
                                        ? user.photos.small
                                        : noPhoto}/>
                                </NavLink>
                                <div>{user.name} {user.status}</div>
                                <div></div>
                            </div>
                            <div>
                                {user.followed
                                    ?
                                    <button disabled={props.followingInProgress.some(id => id == user.id)}
                                            onClick={() => {
                                                props.followingUser(user.id)
                                            }}>UNFOLLOW</button>
                                    :
                                    <button disabled={props.followingInProgress.some(id => id == user.id)}
                                            onClick={() => {
                                                props.unFollowingUser(user.id)
                                            }}>FOLLOW</button>
                                }
                            </div>
                        </div>)
                })}
            </div>
        </div>
    )
}

export default User