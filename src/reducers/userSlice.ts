import { createSlice } from '@reduxjs/toolkit';
import {USER_ID} from "../mocks/user.mock";

const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        setCurrentUser(state, action) {
            return {
                id: USER_ID,
                ...action.payload
            };
        },
        editUser(state, action) {
            return {
                ...state,
                ...action.payload
            };
        },
        updateAvatar(state, action) {
            return {
                ...state,
                avatar: action.payload
            }
        },
        resetCurrentUser() {
            return {};
        }
    }
});

export default userSlice.reducer;
export const { setCurrentUser, editUser, updateAvatar, resetCurrentUser } = userSlice.actions;
