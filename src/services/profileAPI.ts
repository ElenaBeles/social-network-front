import axios from "axios";
import {QueryFunctionContext} from "react-query";
import {Profile} from "models/user.model";
import {API_URL} from "../environment";

export const getUserInfo = async ({ queryKey }: QueryFunctionContext) => {
    const [, userId] = queryKey as [string, string];

    const response = await axios.get(`${API_URL}/profiles/${userId}`);
    return response?.data;
}

export const updateProfile = async (values: { data: Partial<Profile>, userId: number }) => {
    const { data, userId} = values;
    const response = await axios.patch(`${API_URL}/profiles/${userId}`, {
        ...data,
        userId
    });
    return response?.data;
}