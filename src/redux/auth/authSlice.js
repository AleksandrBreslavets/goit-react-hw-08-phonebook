import { createSlice} from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";
import { handleLogRegRejected, handleLoginFulfilled, handleLogoutFulfilled, handleRefreshUserFulfilled, handleRefreshUserPending, handleRefreshUserRejected, handleRegisterFulfilled } from "./handlersOfActions";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        error:null,
    },
    extraReducers: builder => builder
        .addCase(register.fulfilled, handleRegisterFulfilled)
        .addCase(register.rejected, )
        .addCase(logIn.fulfilled, handleLoginFulfilled)
        .addCase(logIn.rejected, handleLogRegRejected)
        .addCase(logOut.fulfilled, handleLogoutFulfilled)
        .addCase(logOut.rejected, handleLogRegRejected)
        .addCase(refreshUser.pending, handleRefreshUserPending) 
        .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
        .addCase(refreshUser.rejected, handleRefreshUserRejected)  
});

export const authReducer = authSlice.reducer;