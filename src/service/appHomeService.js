import axios from "axios";

export default {
  getLunBoTu() {
    return axios.get("api/getLunBoTu");
  },
  getNewsList() {
    return axios.get("api/getnewslist");
  },
  getNewsInfo(id) {
    return axios.get("/api/getnewsinfo", {
      params: {
        id
      }
    });
  }
};
