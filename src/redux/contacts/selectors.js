import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilterValue = state => state.filter;

export const selectVisibleContacts = createSelector([selectContacts, selectFilterValue], (contacts, filter) => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter.trim().toLowerCase()));
});