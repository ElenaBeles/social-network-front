import {createSearchParams, useNavigate} from "react-router-dom";

import {FriendsMock} from "mocks/friends.mock";
import defaultAvatar from 'assets/images/defaultAvatar.png';
import {Button, ButtonThemes} from "components/ui/Button";

import styles from './index.module.sass';

export const FriendsList = () => {
    const data = FriendsMock;

    const navigate = useNavigate();

    const deleteFriend = (id: number) => {
        console.log('Удалить')
    };

    const navigateToFriendPage = (id: number) => {
        navigate({
            pathname: "/profile",
            search: `?${createSearchParams({
                id: id.toString()
            })}`
        });
    };

    return (
        <section className={styles.content}>
            <h1>Мои друзья</h1>
            <div className={styles.friends}>
                {
                    data.map(friend =>
                        <button
                            onClick={() => navigateToFriendPage(friend.id)}
                            className={styles.friend__wrapper}
                            key={friend.id}
                        >
                            <img
                                className={styles.friend__avatar}
                                src={friend.avatar ?? defaultAvatar}
                                 alt="friend_avatar"
                            />
                            <div className={styles.friend__data}>
                                <p>{friend.first_name} {friend.last_name}</p>
                                <p>{friend.university}</p>
                            </div>

                            <Button
                                onClick={e => {
                                    deleteFriend(friend.id);
                                    e?.stopPropagation();
                                }}
                                theme={ButtonThemes.error}
                                className={styles.friend__delete}
                            >
                                Удалить из друзей
                            </Button>
                        </button>
                    )
                }
            </div>
        </section>
    );
}