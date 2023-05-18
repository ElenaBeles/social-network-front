import {UseFormRegisterReturn} from 'react-hook-form';
import cn from 'classnames';
import styles from './index.module.sass';

interface Props {
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    type?: 'password' | 'text';
    className?: string;
}

export const Input = (props: Props) => {
    const {
        value,
        placeholder,
        className,
        disabled = false,
        type = 'text',
        ...rest
    } = props;

    return (
        <label {...rest} className={cn(styles.container, disabled && styles.container_disabled, className)}>
            <input
                value={value}
                type={type}
                disabled={disabled}
                placeholder={placeholder}
                className={styles.control}
            />
        </label>
    );
}