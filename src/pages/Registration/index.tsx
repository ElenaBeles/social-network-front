import {useForm} from "react-hook-form";
import {Input} from "components/ui/Input";
import {Button, ButtonThemes} from "components/ui/Button";

import styles from "../Login/index.module.sass";

interface RegistrationForm {
    email: string;
    password: string;
    phone: number;
}

export const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<RegistrationForm>({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const registration = (data: any) => {
    };

    return (
        <section>
            <h1 className={styles.title}>Регистрация</h1>
            <form
                className={styles.form}
                onSubmit={handleSubmit(registration)}
            >
                <div className={styles.form__control}>
                    <Input
                        placeholder='Email'
                        value=''
                        register={register("email", {
                            required: "Введите email"
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
                    <Input
                        placeholder='Номер телефона'
                        register={register("phone", {
                            required: "Введите телефон",
                            pattern: /^8((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/
                        })}
                    />
                    {
                        errors.phone &&
                        <span className={styles.form__control_error}>
                        Проверьте правильность ввода
                    </span>
                    }
                </div>
                <div className={styles.form__control}>
                    <Input
                        placeholder='Придуумайте пароль'
                        value=''
                        register={register("password", {
                            required: "Введите пароль"
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