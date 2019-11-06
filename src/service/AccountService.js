import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8081";
// Add a request interceptor
let myInterceptor = axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    // config.headers.Authorization = ``;
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default {
  //   register(data) {
  //     return axios.post("", data);
  //   },
  login(username, password) {
    return axios.post("/login", {
      username,
      password
    });
  },
  loginOut() {
    axios.interceptors.request.eject(myInterceptor);
  },
  register(username, password) {
    return axios.post("/register", {
      username,
      password
    });
  }
};
