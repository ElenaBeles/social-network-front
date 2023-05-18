import {NavLink, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';

import {Profile} from "models/user.model";
import {IEditUserForm} from 'models/forms.interface';
import {editUser, resetCurrentUser} from 'reducers/userSlice';
import {FormInput} from 'components/ui/Input/FormInput';
import {Button} from 'components/ui/Button';

import defaultAvatar from 'assets/images/defaultAvatar.png';
import styles from './index.module.sass';
import {updateProfile} from "../../../services/profileAPI";
import {useMutation} from "react-query";
import {removeEmpty} from "../../../utils/removeEmpty";
import {Input} from "../../../components/ui/Input";

interface Props {
    profile: Profile;
    className?: string;
}

export const EditUserForm = ({profile, className}: Props) => {
    const { user} = profile;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<Partial<IEditUserForm>>({
        defaultValues: {
            age: profile.age?.toString() ?? '',
            university: profile.university ?? ''
        }
    });

    const logout = () => {
        localStorage.removeItem('id');
        dispatch(resetCurrentUser());
        navigate('/');
    };

    const editProfileQuery = useMutation('editProfile', updateProfile);

    const edit = (form: Partial<IEditUserForm>) => {
        editProfileQuery.mutate({
            data: removeEmpty(form) ?? {},
            userId: profile.userId!
    });
    };

    return (
        <section className={styles.container}>
            <section className={styles.user}>
                <img
                    className={styles.avatar}
                    src={defaultAvatar}
                    alt='user_avatar'
                />
                <form
                    className={styles.form}
                    onSubmit={handleSubmit(v => edit(v))}
                >
                    <Input
                        disabled
                        value={user.first_name}
                        placeholder='Имя'
                    />
                    <Input
                        disabled
                        value={user.last_name}
                        placeholder='Фамилия'
                    />
                    <FormInput
                        placeholder='Возраст'
                        register={register('age')}
                    />
                    <FormInput
                        placeholder='Университет'
                        register={register('university')}
                    />
                    <Button>Изменить данные</Button>
                </form>
            </section>
            <Button onClick={logout}>
                Выйти
            </Button>
        </section>
    );
}