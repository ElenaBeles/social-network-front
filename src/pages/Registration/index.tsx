import {useMutation} from "react-query";
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';

import {registration} from "services/authAPI";
import {RegistrationModel} from "models/auth.model";
import {FormInput} from 'components/ui/Input/FormInput';
import {Button, ButtonThemes} from 'components/ui/Button';

import styles from '../Login/index.module.sass';

export const Registration = () => {
    const navigate = useNavigate();

    const {
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
                    <FormInput
                        placeholder='Имя'
                        register={register('first_name', {
                            required: 'Введите имя'
                        })}
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
                    <FormInput
                        placeholder='Фамилия'
                        register={register('last_name', {
                            required: 'Введите фамилию'
                        })}
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
                    <FormInput
                        placeholder='Email'
                        register={register('email', {
                            required: 'Введите email'
                        })}
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
                    <FormInput
                        placeholder='Номер телефона'
                        register={register('phone', {
                            required: 'Введите телефон',
                            pattern: /^8((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/
                        })}
                    />
                    {
                        errors.phone &&
                        <span className={styles.form__control_error}>
                            Номер начинается с 89 и содержит 11 цифр
                        </span>
                    }
                </div>
                <div className={styles.form__control}>
                    <FormInput
                        placeholder='Придумайте пароль'
                        type='password'
                        register={register('password', {
                            required: 'Введите пароль'
                        })}
                    />
                    {
                        errors.password && <span className={styles.form__control_error}>
                        {
                            errors.password.message
                        }
                    </span>
                    }
                </div>

                <Button
                    disabled={!isValid}>
                    Войти
                </Button>
            </form>

            <Button
                className={styles.link__registration}
                theme={ButtonThemes.secondary}
            >
                Зарегистрироваться
            </Button>
        </section>
    );
}