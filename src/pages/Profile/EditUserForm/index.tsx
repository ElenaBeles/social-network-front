import {NavLink, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';

import {IEditUserForm} from 'models/forms.interface';
import {editUser, resetCurrentUser} from 'reducers/userSlice';
import {Input} from 'components/ui/Input';
import {Button} from 'components/ui/Button';

import defaultAvatar from 'assets/images/defaultAvatar.png';
import styles from './index.module.sass';


export const EditUserForm = () => {
    const navigate = useNavigate();
    const user = useSelector((state: any) => state.userSlice);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<Partial<IEditUserForm>>({
        defaultValues: {
            first_name: user.first_name,
            last_name: user.last_name,
            age: user.age ?? '',
            university: user.university ?? ''
        }
    });

    const logout = () => {
        dispatch(resetCurrentUser());
        navigate('/');
    };

    const edit = (v: Partial<IEditUserForm>) => {
        dispatch(editUser(v));
    };

    return (
        <section className={styles.container}>
            <section className={styles.user}>
                <img
                    className={styles.avatar}
                    src={user.avatar ?? defaultAvatar}
                    alt='user_avatar'
                />
                <form
                    className={styles.form}
                    onSubmit={handleSubmit(v => edit(v))}
                >
                    <Input placeholder='Имя' register={register('first_name')}/>
                    <Input placeholder='Фамилия' register={register('last_name')}/>
                    <Input placeholder='Возраст' register={register('age')}/>
                    <Input placeholder='Университет' register={register('university')}/>
                    <Button>Изменить данные</Button>
                </form>
            </section>
            <NavLink
                className={styles.link}
                to='/friends'
            >
                Мои друзья
            </NavLink>
            <Button onClick={logout}>
                Выйти
            </Button>
        </section>
    );
}