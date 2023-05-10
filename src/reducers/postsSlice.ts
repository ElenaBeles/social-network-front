import {createSlice} from '@reduxjs/toolkit';
import {Post} from 'models/post.interface';

const postSlice = createSlice({
    name: 'post',
    initialState: new Array<Post>(),
    reducers: {
        addPost(state, action) {
            const newPost: Post = {
                id: Math.random(),
                created_at: new Date(Date.now()),
                likes_count: 0,
                ...action.payload,
            };

            return Array.isArray(state) ? [...state, newPost] : [newPost];
        },
        deletePost(state, action) {
            if(!Array.isArray(state)) {
                return;
            }
            return state.filter(post => post.id !== action.payload);
        },
    }
});

export default postSlice.reducer;
export const { addPost, deletePost } = postSlice.actions;