import {UseFormRegisterReturn} from 'react-hook-form';
import cn from 'classnames';
import styles from './index.module.sass';

interface Props {
    value?: string;
    register: UseFormRegisterReturn<any>;
    placeholder?: string;
    type?: 'password' | 'text';
    className?: string;
}

export const Input = (props: Props) => {
    const {
        placeholder,
        className,
        register,
        type = 'text',
        ...rest
    } = props;

    return (
        <label {...rest} className={cn(styles.container, className)}>
            <input
                {...register}
                placeholder={placeholder}
                type={type}
                className={styles.control}
            />
        </label>
    );
}