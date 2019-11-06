import axios from "axios";

export default {
  getLunBoTu() {
    return axios.get("api/getLunBoTu");
  }
};
