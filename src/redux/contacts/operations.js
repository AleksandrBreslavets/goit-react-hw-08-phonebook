import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";



export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk('contacts/addContact',
    async (userInfo, { rejectWithValue }) => {
        try {
            const response = await axios.post('/contacts', userInfo);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

