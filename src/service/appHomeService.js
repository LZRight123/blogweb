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
  },
  getCommentInfo(id) {
    return axios.get("/api/getnewscomments", {
      params: {
        id
      }
    });
  },
  addComment(from, to, content) {
    return axios.post("/api/addnewscomment", {
      from,
      to,
      content
    });
  }
};
