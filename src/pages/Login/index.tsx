import {useState} from 'react';
import {useSelector} from 'react-redux';
import {createSearchParams, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';

import {isEqualObject} from 'utils/isEqualObject';
import {USER_ID} from 'mocks/user.mock';
import {Button, ButtonThemes} from 'components/ui/Button';
import {Input} from 'components/ui/Input';

import styles from './index.module.sass';

interface LoginForm {
    password: string;
    email: string;
}

export const Login = () => {
    const [hasAuthError, changeHasAuthError] = useState(false);
    const navigate = useNavigate();
    const user = useSelector((state: any) => state.userSlice);

    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<LoginForm>({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const auth = (data: any) => {
        const userAuthData = {
            phone: user.phone,
            password: user.password
        };
        if (!isEqualObject(userAuthData, data)) {
            return changeHasAuthError(true);
        }
        navigate({
            pathname: '/profile',
            search: `?${createSearchParams({
                id: USER_ID
            })}`
        });
    };

    return (
        <section>
            <h1 className={styles.title}>Вход</h1>
            <form
                className={styles.form}
                onSubmit={handleSubmit(auth)}
            >
                <div className={styles.form__control}>
                    <Input
                        placeholder='Email'
                        value=''
                        register={register('email', {
                            required: 'Введите email'
                        })}
                    />
                    {errors.email && <span className={styles.form__control_error}>
                        {errors.email.message}
                    </span>}
                </div>
                <div className={styles.form__control}>
                    <Input
                        placeholder='Пароль'
                        value=''
                        type='password'
                        register={register('password', {
                            required: 'Введите пароль'
                        })}
                    />
                    {errors.password && <span className={styles.form__control_error}>
                        {errors.password.message}
                    </span>}
                </div>
                <Button
                    disabled={!isValid}>
                    Войти
                </Button>
                {
                    hasAuthError &&
                    <span className={styles.form__control_error}>
                        Проверьте корректность ввода полей
                    </span>
                }
            </form>
            <Button
                onClick={() => navigate('/registration')}
                className={styles.link__registration}
                theme={ButtonThemes.secondary}
            >
                Зарегистрироваться
            </Button>
        </section>
    );
}