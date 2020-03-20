import axios from "axios";
import env from "./env";

// var _token = '';

function getInstance() {
  // var authHeader = `Bearer ${_token}`;
  return axios.create({
    baseURL: env.apiBaseUrl,
    // baseURL: "http://localhost:8890/",
    headers: {
      // 'Authorization': authHeader
    },
    responseType: "json"
  });
}

export default {
  get(url, config) {
    return getInstance().get(url, config);
  },
  post(url, data, config) {
    return getInstance().post(url, data, config);
  },
  put(url, data, config) {
    return getInstance().put(url, data, config);
  },
  delete(url, config) {
    return getInstance().delete(url, config);
  }
  // setToken(token) {
  //   _token = token;
  // },
  // hasToken() {
  //   return !!_token;
  // }
};
