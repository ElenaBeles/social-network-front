import React, {ReactNode} from 'react';
import cn from 'classnames';
import styles from './index.module.sass';
import {Header} from '../Header';

interface Props {
    children: ReactNode;
    className: string;
}
export const Layout = ({children, className, ...rest}: Partial<Props>) => {
    return (
        <div {...rest} className={cn(styles.container)}>
            <Header className={styles.header}/>
            <section className={styles.content}>
                {children}
            </section>
        </div>
    );
}