import {useSelector} from 'react-redux';
import {useSearchParams} from 'react-router-dom';

import {EditUserForm} from './EditUserForm';
import {PreviewProfile} from './PreviewProfile';
import {PostList} from '../PostList';

import styles from './index.module.sass';

export const Profile = () => {
    const user = useSelector((state: any) => state.userSlice);

    const [searchParams] = useSearchParams();
    const isOtherUser = !(user.id === searchParams.get('id'));

    return (
        <div className={styles.content}>
            <section className={styles.user__container}>
                {
                    isOtherUser ? <PreviewProfile/> : <EditUserForm/>
                }
            </section>
            <PostList className={styles.feed}/>
        </div>
    );
}