/* eslint-disable arrow-body-style */
const DEFAULT_API_LOCALHOST = `${process.env.REACT_APP_SERVER_URL}/api/v1`;

export const signInUrl = `${DEFAULT_API_LOCALHOST}/auth/sign_in`;

export const signOutUrl = `${DEFAULT_API_LOCALHOST}/auth/sign_out`;

export const signUpUrl = `${DEFAULT_API_LOCALHOST}/auth`;

export const currentUserUrl = `${DEFAULT_API_LOCALHOST}/auth/validate_token`;

export const guestSignInUrl = `${DEFAULT_API_LOCALHOST}/auth/guest_sign_in`;

export const myPageUrl = `${DEFAULT_API_LOCALHOST}/auth/edit`;

export const restaurantsIndexUrl = `${DEFAULT_API_LOCALHOST}/restaurants`;

export const foodsIndexUrl = (restaurantId: string) =>
  `${DEFAULT_API_LOCALHOST}/restaurants/${restaurantId}/foods`;

export const cartsUrl = `${DEFAULT_API_LOCALHOST}/carts`;

export const cartDetailsUrl = (foodId: string) =>
  `${DEFAULT_API_LOCALHOST}/cart_details/${foodId}`;

export const cartDetailsReplaceUrl = (foodId: string) =>
  `${DEFAULT_API_LOCALHOST}/cart_details/replace/${foodId}`;

export const ordersUrl = `${DEFAULT_API_LOCALHOST}/orders`;

export const contactsUrl = `${DEFAULT_API_LOCALHOST}/contacts`;
