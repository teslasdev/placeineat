import React from 'react'

export const getToken = () => {
   const tokenString = sessionStorage.getItem('token');
   const userToken = JSON.parse(tokenString);
   return userToken;
}

export const setToken  = (userToken) => {
   sessionStorage.setItem('token', JSON.stringify(userToken));
}