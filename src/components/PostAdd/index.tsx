import {ChangeEvent, useState} from "react";

import {Textarea} from "components/ui/Textarea";
import {Button} from "components/ui/Button";

import styles from './index.module.sass';

interface CreatePost {
    text: string;
    img: null | File;
}

export const PostAdd = () => {
    const [post, postChange] = useState<CreatePost>({
        text: '',
        img: null
    });
    const uploadPostImage = (event: ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;

        if (!files) {
            return {};
        }

        return postChange(prev => ({
            ...prev,
            img: files[0]
        }));
    };

    const publish = () => {
        console.log('Опубликовать пост');
    };

    return (
        <section>
            <Textarea
                value={post.text}
                onChange={v => postChange(prev => ({
                    ...prev,
                    text: v
                }))}
                placeholder='Напишите что-нибудь'
            />
            <div className={styles.controls}>
                <label className={styles.controls__image}>
                    Добавить фото
                    <input onChange={uploadPostImage} type="file"/>
                </label>
                <Button onClick={publish}>Опубликовать пост</Button>
            </div>
        </section>
    );
}