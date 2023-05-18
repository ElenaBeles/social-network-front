import {useState} from 'react';
import {useMutation} from "react-query";
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';

import {login} from "services/authAPI";
import {AuthModel} from "models/auth.model";
import {Button, ButtonThemes} from 'components/ui/Button';
import {FormInput} from 'components/ui/Input/FormInput';

import styles from './index.module.sass';

export const Login = () => {
    const [hasAuthError, changeHasAuthError] = useState(false);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<AuthModel>({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const loginQuery = useMutation((data: AuthModel) => login(data));

    const auth = (data: AuthModel) => {
        loginQuery.mutate(data, {
            onSuccess: req => {
                localStorage.setItem('id', req?.data?.userId ?? '');
                navigate('/profile');
            },
            onError: () => {
                changeHasAuthError(true);
            }
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
                    <FormInput
                        placeholder='Email'
                        register={register('email', {
                            required: 'Введите email'
                        })}
                    />
                    {errors.email && <span className={styles.form__control_error}>
                        {errors.email.message}
                    </span>}
                </div>
                <div className={styles.form__control}>
                    <FormInput
                        placeholder='Пароль'
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