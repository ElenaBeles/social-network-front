import styles from './index.module.sass';
import cn from "classnames";
import {UseFormRegisterReturn} from "react-hook-form";

interface Props {
    value?: string;
    register: UseFormRegisterReturn<any>;
    placeholder?: string;
    className?: string;
}

export const Input = (props: Props) => {
    const {
        placeholder,
        className,
        register,
        ...rest
    } = props;

    return (
        <label {...rest} className={cn(styles.container, className)}>
            <input
                {...register}
                placeholder={placeholder}
                type="text"
                className={styles.control}
            />
        </label>
    );
}