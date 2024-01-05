import { csrfFetch } from "./csrf";

export const ADD_USER = "session/ADD_USER";
export const REMOVE_USER = "session/REMOVE_USER";

const setUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

const removeUser = () => {
    return {
        type: REMOVE_USER,
    }
}

export const login = (user) => async dispatch => {
    const { credential, password } = user;
    const response = await csrfFetch(`/api/session`, {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password
        })
    });

    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
}

export const signup = (user) => async dispatch => {
    const { username, email, password } = user;
    const response = await csrfFetch(`/api/session`, {
        method: 'POST',
        body: JSON.stringify({
            username,
            email,
            password
        })
    });

    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
}

// Restore User after Refresh
export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
}

const initialState = {
    user: null
};

const sessionReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case ADD_USER:
            newState.user = action.payload;
            return newState;

        case REMOVE_USER:
            newState.user = null;
            return newState;

        default:
            return state;
    }
}

export default sessionReducer;
