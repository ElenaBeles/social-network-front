import {useState} from 'react';
import cn from "classnames";

import {Profile} from "models/user.model";
import defaultAvatar from 'assets/images/defaultAvatar.png';
import styles from './index.module.sass';

interface Props {
    profile: Profile;
    className?: string;
}

export const PreviewProfile = ({profile, className}: Props) => {
    const [isFriend, changeIsFriend] = useState(false);

    const { user } = profile;

    const addFriend = () => {
        changeIsFriend(true);
    };

    const deleteFriend = () => {
        changeIsFriend(false);
    };

    return (
        <div className={cn(styles.info, className)}>
            <h1>{user.first_name} {user.last_name}</h1>
            <img className={styles.avatar} src={defaultAvatar} alt='user_avatar'/>
            {
                profile.age &&
                <p className={styles.field}>{profile.age} лет</p>
            }
            <p className={styles.field}>{profile.university}</p>
        </div>
    );
}