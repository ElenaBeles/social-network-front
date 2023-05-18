import {UseFormRegisterReturn} from 'react-hook-form';
import cn from 'classnames';
import styles from '../index.module.sass';

interface Props {
    register?: UseFormRegisterReturn<any>;
    placeholder?: string;
    disabled?: boolean;
    type?: 'password' | 'text';
    className?: string;
}

export const FormInput = (props: Props) => {
    const {
        placeholder,
        className,
        register,
        disabled = false,
        type = 'text',
        ...rest
    } = props;

    return (
        <label {...rest} className={cn(styles.container, disabled && styles.container_disabled, className)}>
            <input
                {...register}
                type={type}
                disabled={disabled}
                placeholder={placeholder}
                className={styles.control}
            />
        </label>
    );
}