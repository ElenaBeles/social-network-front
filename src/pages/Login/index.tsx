import {useForm} from "react-hook-form";

import {Button, ButtonThemes} from "components/ui/Button";
import {Input} from "components/ui/Input";

import styles from './index.module.sass';

interface LoginForm {
    password: string;
    email: string;
}

export const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<LoginForm>({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const auth = (data: any) => {
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
                        register={register("email", {
                            required: "Введите email"
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
                        register={register("password", {
                            required: "Введите пароль"
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