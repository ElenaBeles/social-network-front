import {useForm} from "react-hook-form";

import {Input} from "components/ui/Input";
import {Button} from "components/ui/Button";

import defaultAvatar from "assets/images/defaultAvatar.png";
import styles from "./index.module.sass";
import {NavLink} from "react-router-dom";

export const EditUserForm = () => {
    const user = {
        firstName: 'Ivan',
        lastName: 'Ivanov',
        avatar: defaultAvatar,
        age: '18',
        university: 'КФУ'
    }

    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({
        defaultValues: {
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            university: user.university
        }
    });

    return (
        <section className={styles.container}>
            <section className={styles.user}>
                <img
                    className={styles.avatar}
                    src={user.avatar}
                    alt="user_avatar"
                />
                <form
                    className={styles.form}
                    onSubmit={handleSubmit(v => console.log(v))}
                >
                    <Input register={register('firstName')}/>
                    <Input register={register('lastName')}/>
                    <Input register={register('age')}/>
                    <Input register={register('university')}/>
                    <Button>Изменить данные</Button>
                </form>
            </section>
            <NavLink
                className={styles.link}
                to='/friends'
            >
                Мои друзья
            </NavLink>
        </section>
    );
}