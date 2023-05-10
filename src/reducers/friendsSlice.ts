import {createSlice} from '@reduxjs/toolkit';
import {FriendsMock} from '../mocks/friends.mock';

const friendsSlice = createSlice({
    name: 'post',
    initialState: FriendsMock,
    reducers: {
        addFriend(state, action) {
            return [...state, action.payload];
        },
        deleteFriend(state, action) {
            if(!Array.isArray(state)) {
                return;
            }
            return state.filter(post => post.id !== action.payload);
        },
    }
});

export default friendsSlice.reducer;
export const { addFriend, deleteFriend } = friendsSlice.actions;