import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers/module";

const selectAuthState = createFeatureSelector<AuthState>("auth");

export const isLoggedIn = createSelector(
    selectAuthState,
    data => !!data?.user
)

export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
)