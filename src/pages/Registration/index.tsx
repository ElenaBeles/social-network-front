import {useMutation} from "react-query";
import React from "react";
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';

import {registration} from "services/authAPI";
import {RegistrationModel} from "models/auth.model";
import {Input} from 'components/ui/Input';
import {Button, ButtonThemes} from 'components/ui/Button';
import {MaskedInput} from "components/ui/Input/MaskedInput";

import styles from '../Login/index.module.sass';

export const Registration = () => {
    const navigate = useNavigate();

    const {
        setValue,
        getValues,
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<Partial<RegistrationModel>>({
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        }
    });

    const registrationQuery =
        useMutation((data: RegistrationModel) => registration(data));

    return (
        <section>
            <h1 className={styles.title}>Регистрация</h1>
            <form
                className={styles.form}
                onSubmit={handleSubmit(val => {
                    registrationQuery.mutate(val as RegistrationModel, {
                        onSuccess: data => {
                            navigate('/login');
                        }
                    })
                })}
            >
                <div className={styles.form__control}>
                    <Input
                        onChange={v => setValue('first_name', v)}
                        placeholder='Имя'
                    />
                    {
                        errors.first_name && <span className={styles.form__control_error}>
                        {
                            errors.first_name.message
                        }
                    </span>
                    }
                </div>
                <div className={styles.form__control}>
                    <Input
                        onChange={v => setValue('last_name', v)}
                        placeholder='Фамилия'
                    />
                {
                    errors.last_name && <span className={styles.form__control_error}>
                        {
                            errors.last_name.message
                        }
                    </span>
                }
            </div>
                <div className={styles.form__control}>
                    <Input
                        onChange={v => setValue('email', v)}
                        placeholder='Email'
                    />
                    {
                        errors.email && <span className={styles.form__control_error}>
                        {
                            errors.email.message
                        }
                    </span>
                    }
                </div>
                <div className={styles.form__control}>
                    <MaskedInput
                        onChange={v => setValue('phone', v)}
                        placeholder='Номер телефона'
                        maskOptions={{
                            mask: '+{7} (000) 000-00-00'
                        }}
                    />
                    {
                        errors.phone &&
                        <span className={styles.form__control_error}>
                            Поле обязательно для заполнения
                        </span>
                    }
                </div>
                <div className={styles.form__control}>
                    <Input
                        onChange={v => setValue('password', v)}
                        placeholder='Придумайте пароль'
                        type='password'
                    />
                    {
                        errors.password && <span className={styles.form__control_error}>
                        {
                            errors.password.message
                        }
                    </span>
                    }
                </div>
                <Button>
                    Зарегистрироваться
                </Button>
            </form>
            <Button
                className={styles.link__registration}
                onClick={() => navigate('/registration')}
                theme={ButtonThemes.secondary}
            >
                Войти
            </Button>
        </section>
    );
}