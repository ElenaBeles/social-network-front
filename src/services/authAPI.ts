import axios from "axios";
import {API_URL} from "../environment";
import {AuthModel, RegistrationModel} from "../models/auth.model";

export const login = (value: AuthModel) =>
    axios.post(`${API_URL}/auth/login`, value);

export const registration = (value: RegistrationModel) =>
    axios.post(`${API_URL}/users`, value);
