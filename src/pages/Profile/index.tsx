import {useSelector} from 'react-redux';
import {useQuery} from "react-query";
import {useLocation, useSearchParams} from 'react-router-dom';

import {getUserInfo} from "services/profileAPI";
import {LoaderSpinner} from "components/ui/LoaderSpinner";
import {EditUserForm} from './EditUserForm';
import {PreviewProfile} from './PreviewProfile';
import {PostList} from '../PostList';

import styles from './index.module.sass';

export const Profile = () => {
    const currentUser = useSelector((state: any) => state.userSlice);

    const [searchParams] = useSearchParams();
    const location = useLocation();

    const userPageId = searchParams.get('id');
    const isOtherUser = userPageId != currentUser.userId;

    const { data, isLoading } = useQuery(['user', userPageId], getUserInfo, {
        retry: 0,
        refetchOnWindowFocus: false,
        enabled: !!location.pathname && (userPageId !== currentUser.id)
    });

    return (
        <div className={styles.content}>
            <section className={styles.user__container}>

                {
                    isOtherUser &&
                    <>
                        {
                            isLoading && <LoaderSpinner />
                        }
                        {
                            data && isOtherUser && <PreviewProfile profile={data} />
                        }
                    </>
                }
                {
                    !isOtherUser && currentUser.userId && <EditUserForm profile={currentUser} />
                }
            </section>
            <PostList className={styles.feed} />
        </div>
    );
}