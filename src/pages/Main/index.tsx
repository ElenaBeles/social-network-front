import {useQuery} from "react-query";
import {getAllUsers} from "services/userAPI";

import styles from './index.module.sass';

export const Main = () => {
    const { data } = useQuery('users', getAllUsers);
    return (
        <section className={styles.container}>
            <h1>Добро пожаловать</h1>
            <h3 className={styles.subtitle}>Пользователей на сайте: {data?.length}</h3>
        </section>
    );
}