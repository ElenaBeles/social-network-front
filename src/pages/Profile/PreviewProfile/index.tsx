import {useState} from 'react';
import {Button, ButtonThemes} from 'components/ui/Button';

import defaultAvatar from 'assets/images/defaultAvatar.png';
import styles from './index.module.sass';

export const PreviewProfile = () => {
    const user = {
        firstName: 'Ivan',
        lastName: 'Ivanov',
        avatar: defaultAvatar,
        age: '18',
        university: 'КФУ'
    }

    const [isFriend, changeIsFriend] = useState(false);

    const addFriend = () => {
        changeIsFriend(true);
    };

    const deleteFriend = () => {
        changeIsFriend(false);
    };

    return (
        <section className={styles.container}>
            <div className={styles.info}>
                <h1>{user.firstName} {user.lastName}</h1>
                <img className={styles.avatar} src={user.avatar} alt='user_avatar'/>
                <p className={styles.field}>{user.age} лет</p>
                <p className={styles.field}>{user.university}</p>
            </div>

            <div className={styles.controls}>
                {
                    isFriend ?
                        <Button
                            onClick={deleteFriend}
                            theme={ButtonThemes.error}
                        >
                            Удалить из друзей
                        </Button>
                        :

                        <Button
                            onClick={addFriend}
                        >
                            Добавить в друзья
                        </Button>
                }
            </div>
        </section>
    );
}