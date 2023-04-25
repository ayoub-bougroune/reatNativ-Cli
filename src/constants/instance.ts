import axios from "axios";
import { ADMIN_TOKEN, HOST } from "./env";
import { store } from "../redux/store";

export const instance = axios.create({ baseURL: HOST });

instance.interceptors.request.use((req: any) => {
  const state = store.getState();
  const USER_TOKEN = state.signIn.tokens;
  req.url?.includes(`/mine`) || req.url?.includes(`customers/me`) ?
  req.headers.common.Authorization = `Bearer ${USER_TOKEN}` :
  req.headers.common.Authorization = `Bearer ${ADMIN_TOKEN}`;
  return req;
});

