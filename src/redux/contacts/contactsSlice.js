import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { handleAddContactFulfilled, handleDeleteContactFulFilled, handleFetchContactsFulfilled, handleLogoutFulfilled, handlePending, handleRejected } from "./handlersOfActions";
import { defaultActionStatus, handleActionTypesChange } from "./actionTypesHandlers";
import { logOut } from "redux/auth/operations";

const contactsSlice = createSlice({
    name: 'contacts', 
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
            .addCase(addContact.fulfilled, handleAddContactFulfilled)
            .addCase(deleteContact.fulfilled, handleDeleteContactFulFilled)
            .addCase(logOut.fulfilled,handleLogoutFulfilled)
            .addMatcher(isAnyOf(...handleActionTypesChange(defaultActionStatus.pending)), handlePending)
            .addMatcher(isAnyOf(...handleActionTypesChange(defaultActionStatus.rejected)), handleRejected)
    }
});

export const contactsReducer = contactsSlice.reducer;