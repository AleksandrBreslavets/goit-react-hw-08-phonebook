export const handleRegisterFulfilled = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
    state.error = null;
};

export const handleLoginFulfilled = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
    state.error = null;
};

export const handleLogoutFulfilled = (state, action) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
    state.error = null;
};

export const handleLogRegRejected = (state, action) => {
    state.error = action.payload;
};

export const handleRefreshUserPending = state => {
    state.isRefreshing = true;
};

export const handleRefreshUserFulfilled = (state, action) => {
    state.user = action.payload;
    state.isRefreshing = false;
    state.isLoggedIn = true;
    state.error = null;
};

export const handleRefreshUserRejected = (state, action) => {
    state.isRefreshing = false;
};

