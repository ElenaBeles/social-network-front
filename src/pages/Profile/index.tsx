import styles from './index.module.sass';
import {EditUserForm} from "./EditUserForm";
import {PreviewProfile} from "./PreviewProfile";

export const Profile = () => {
    const isOtherUser = false;

    return (
        <div className={styles.content}>
            <section className={styles.user__container}>
                {
                    isOtherUser ? <PreviewProfile/> : <EditUserForm/>
                }
            </section>

            <section>
                Feed
            </section>
        </div>
    );
}