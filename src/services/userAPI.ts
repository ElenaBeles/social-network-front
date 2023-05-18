import axios from "axios";
import {API_URL} from "../environment";
import {User} from "../models/user.model";

export const getAllUsers = async (): Promise<User[]> => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
}