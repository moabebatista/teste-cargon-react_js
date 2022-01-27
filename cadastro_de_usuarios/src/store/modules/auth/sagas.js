import { takeLatest, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import history from "../../../services/history";
import api from "../../../services/api";

import { signInSuccess, signFailure } from "./actions";

export function* signIn() {
  try {
    const token =
      "6ed49e230e20da377131ef7974e6da1da2d9a9848b7e0440931eb497439c1165";

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token));

    history.push("/users");
  } catch (err) {
    toast.error("Falha no autenticação, verifique seus dados");
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push("/");
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_OUT", signOut),
]);
