import {useState} from 'react';
import {useDispatch} from 'react-redux';
import cn from 'classnames';

import {Post} from 'models/post.interface';
import {deletePost} from 'reducers/postsSlice';
import {Button, ButtonThemes} from 'components/ui/Button';

import styles from './index.module.sass';

interface Props {
    data: Post;
    className?: string;
}

export const PostPreview = ({data, className, ...rest}: Partial<Props>) => {
    const [countLike, changeCountLike] = useState(0);

    const dispatch = useDispatch();

    return (
        <section {...rest} className={cn(styles.container, className)}>
            {
                data?.created_at &&
                <span>
                {data.created_at.toLocaleDateString()}
            </span>
            }
            <p>
                {data?.text}
            </p>
            <div className={styles.controls}>
                <Button
                    onClick={() => dispatch(deletePost(data?.id))}
                    theme={ButtonThemes.error}
                >
                    Удалить пост
                </Button>
                <Button
                    onClick={() => changeCountLike(prev => ++prev)}
                    theme={ButtonThemes.primary}
                >
                    Лайк
                </Button>
                <p className={styles.alert}>Лайки: {countLike}</p>
            </div>
        </section>
    );
}