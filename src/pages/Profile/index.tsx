import {EditUserForm} from "./EditUserForm";
import {PreviewProfile} from "./PreviewProfile";
import {PostList} from "../PostList";

import styles from './index.module.sass';

export const Profile = () => {
    const isOtherUser = false;

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