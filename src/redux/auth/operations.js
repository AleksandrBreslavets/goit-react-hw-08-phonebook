import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            setAuthToken(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            setAuthToken(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout');
            clearAuthToken();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, { getState, rejectWithValue }) => {
        const { token } = getState().auth;
        if (token === null) {
            return rejectWithValue();
        }
        setAuthToken(token);
        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
