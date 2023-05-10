import {useSelector} from 'react-redux';
import cn from 'classnames';

import {Post} from 'models/post.interface';
import {PostAdd} from 'components/PostAdd';
import {PostPreview} from 'components/Post';

import styles from './index.module.sass';
import {useEffect, useState} from 'react';

interface Props {
    className?: string;
}

export const PostList = ({className, ...rest}: Props) => {
    const data = useSelector((state: any) => state.postsSlice) as Post[];
    const [sortedData, changeSortedData] = useState<Post[]>([]);

    const sortPosts = () => {
        return [...data].sort((a: Post, b: Post) => {
            return sortDate(a.created_at, b.created_at);
        });
    };

    const sortDate = (v1: Date, v2: Date) => {
        return v1.getDate() - v2.getDate();
    };

    useEffect(() => {
        changeSortedData(sortPosts);
    }, [data]);

    return (
        <section {...rest} className={cn(styles.content, className)}>
            <PostAdd/>
            <hr className={styles.delimiter}/>
            {
                sortedData?.map(post =>
                    <PostPreview data={post} key={post.id}/>
                )
            }
            {
                data.length === 0 &&
                <span>Пока нет постов</span>
            }
        </section>
    );
}