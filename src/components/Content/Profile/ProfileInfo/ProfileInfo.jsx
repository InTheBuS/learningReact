import React from "react";
import ProfileInfoCss from './ProfileInfo.module.css'
import Loader from "../../../common/Loader";
import noPhoto from './../../../../subjects/WithoutPhoto/e09HHwnXdP8.jpg'
import ProfileStatusHook from "./ProfileStatusHook";
/*import ProfileStatusHook from './ProfileStatus';*/

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loader/>
    }
    return (
        <div className={ProfileInfoCss.profileInfo}>
            <img src='https://sun1-94.userapi.com/bS_B8Sb1Xh2HREnpGBHE3EbXBo192pCPyIaN0w/Q0pyCESHbE0.jpg'/>
            <div>
                <div className={ProfileInfoCss.avatar}>
                    <img src={props.profile.photos.large ? props.profile.photos.large : noPhoto}/>
                </div>
                <div>{props.profile.fullName} </div>
                <ProfileStatusHook status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo