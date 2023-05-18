import {deleteFriend} from 'reducers/friendsSlice';
import {useDispatch} from 'react-redux';
import {useQuery} from "react-query";
import {createSearchParams, useNavigate} from 'react-router-dom';

import {getAllUsers} from "services/userAPI";
import {Button, ButtonThemes} from 'components/ui/Button';

import defaultAvatar from 'assets/images/defaultAvatar.png';
import styles from './index.module.sass';

export const FriendsList = () => {
    const { data } = useQuery('users', getAllUsers);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigateToFriendPage = (id: number) => {
        navigate({
            pathname: '/profile',
            search: `?${createSearchParams({
                id: id.toString()
            })}`
        });
    };

    return (
        <section className={styles.content}>
            <h1>Пользователи</h1>
            <div className={styles.friends}>
                {
                    data?.map(friend =>
                        <button
                            onClick={() => navigateToFriendPage(friend.id)}
                            className={styles.friend__wrapper}
                            key={friend.id}
                        >
                            <img
                                className={styles.friend__avatar}
                                src={defaultAvatar}
                                alt='friend_avatar'
                            />
                            <div className={styles.friend__data}>
                                <p>{friend.first_name} {friend.last_name}</p>
                                <p className={styles.friend__phone}>{friend.phone}</p>
                            </div>
                            <Button
                                onClick={e => {
                                    dispatch(deleteFriend(friend.id));
                                    e?.stopPropagation();
                                }}
                                theme={ButtonThemes.error}
                                className={styles.friend__delete}
                            >
                                Удалить
                            </Button>
                        </button>
                    )
                }
            </div>
        </section>
    );
}