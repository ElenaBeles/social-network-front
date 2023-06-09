import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useMutation} from "react-query";
import {useForm} from 'react-hook-form';

import {updateProfile} from "services/profileAPI";
import {removeEmpty} from "utils/removeEmpty";
import {resetCurrentUser} from 'reducers/userSlice';
import {Profile} from "models/user.model";
import {IEditUserForm} from 'models/forms.interface';
import {Input} from 'components/ui/Input';
import {Button} from 'components/ui/Button';

import defaultAvatar from 'assets/images/defaultAvatar.png';
import styles from './index.module.sass';

interface Props {
    profile: Profile;
    className?: string;
}

export const EditUserForm = ({profile, className}: Props) => {
    const { user} = profile;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        control,
        getValues,
        setValue,
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
                        onChange={v => v}
                    />
                    <Input
                        disabled
                        value={user.last_name}
                        placeholder='Фамилия'
                        onChange={v => v}
                    />
                    <Input
                        value={getValues('age')}
                        onChange={v => setValue('age', v)}
                        placeholder='Возраст'
                    />
                    <Input
                        value={getValues('university')}
                        onChange={v => setValue('university', v)}
                        placeholder='Университет'
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