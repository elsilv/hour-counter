/*

// eslint-disable-next-line
import React, { createContext, useReducer } from 'react';
// eslint-disable-next-line
import AuthReducer from './AuthReducer';
import USER_LOADED from './AuthReducer';
// eslint-disable-next-line
import USER_LOADING from './AuthReducer';
import AUTH_ERROR from './AuthReducer';
import axios from 'axios';

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: 'USER_LOADING' })

    axios.get('/api/auth/user', tokenConfig(getState))
    .then(res => dispatch({
        type: USER_LOADED,
        payload: res.data
    }))
    .catch(err => {
        dispatch({
            type: AUTH_ERROR
        })
    });
}

export const tokenConfig = getState => {
    const token = getState().auth.token;
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if(token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
}

*/