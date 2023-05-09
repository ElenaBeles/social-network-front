import cn from "classnames";
import {Post} from "models/post.interface";

import styles from './index.module.sass';
import {Button, ButtonThemes} from "../ui/Button";

interface Props {
    data: Post;
    className?: string;
}

export const PostPreview = ({data, className, ...rest}: Partial<Props>) => {
    return (
        <section {...rest} className={cn(styles.container, className)}>
            <p>
                {data?.text}
            </p>
            <div className={styles.controls}>
                <Button theme={ButtonThemes.primary}>
                    Лайк
                </Button>

                <Button theme={ButtonThemes.error}>
                    Удалить пост
                </Button>
            </div>
        </section>
    );
}