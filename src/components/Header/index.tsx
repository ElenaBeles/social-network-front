import styles from './index.module.sass';
import cn from "classnames";
import {NavLink} from "react-router-dom";

interface Props {
    className: string;
}
export const Header = ({className, ...rest}: Partial<Props>) => {
    return (
        <header {...rest} className={cn(styles.container, className)}>
            <NavLink
                className={styles.link}
                to='/login'
            >
                Войти
            </NavLink>
            <NavLink
                className={styles.link}
                to='/registration'
            >
                Зарегистрироваться
            </NavLink>
            <NavLink
                className={styles.link}
                to='/profile'
            >
                Профиль
            </NavLink>
            <NavLink
                className={styles.link}
                to='/posts'
            >
                Посты
            </NavLink>
            <NavLink
                className={styles.link}
                to='/friends'
            >
                Мои друзья
            </NavLink>
        </header>
    );
}