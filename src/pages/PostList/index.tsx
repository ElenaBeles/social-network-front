import {PostsMock} from "mocks/posts.mock";
import {PostAdd} from "components/PostAdd";
import {PostPreview} from "components/Post";

import styles from './index.module.sass';
import cn from "classnames";

interface Props {
    className?: string;
}

export const PostList = ({className, ...rest}: Props) => {
    const data = PostsMock;

    return (
        <section {...rest} className={cn(styles.content, className)}>
            <PostAdd />
            <hr className={styles.delimiter}/>
            {
                data.map(post =>
                    <PostPreview data={post} key={post.id} />
                )
            }
        </section>
    );
}