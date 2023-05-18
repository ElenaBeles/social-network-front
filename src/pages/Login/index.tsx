import {useState} from 'react';
import {useMutation} from "react-query";
import {createSearchParams, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';

import {login} from "services/authAPI";
import {AuthModel} from "models/auth.model";
import {Button, ButtonThemes} from 'components/ui/Button';
import {Input} from 'components/ui/Input';

import styles from './index.module.sass';

export const Login = () => {
    const [hasAuthError, changeHasAuthError] = useState(false);

    const navigate = useNavigate();

    const {
        setValue,
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
                const id: string = req?.data?.userId;
                if(!id) {
                    return;
                }
                localStorage.setItem('id', id);
                navigate({
                    pathname: '/profile',
                    search: `?${createSearchParams({
                        id
                    })}`
                });
            },
            onError: () => {
                changeHasAuthError(true);
            }
        });
    };

    return (
        <section>
            <h1 className={styles.title}>Вход</h1>
            <form className={styles.form}>
                <div className={styles.form__control}>
                    <Input
                        onChange={v => setValue('email', v)}
                        placeholder='Email'
                    />
                    {errors.email && <span className={styles.form__control_error}>
                        {errors.email.message}
                    </span>}
                </div>
                <div className={styles.form__control}>
                    <Input
                        onChange={v => setValue('password', v)}
                        placeholder='Пароль'
                        type='password'
                    />
                    {
                        errors.password && <span className={styles.form__control_error}>
                        {errors.password.message}
                    </span>
                    }
                </div>
                <Button type='submit' disabled={!isValid} onClick={handleSubmit(auth)}>
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