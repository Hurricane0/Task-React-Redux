import * as axios from "axios";

export const authAPI = {
  authUser(email, password) {
    return axios
      .post("https://mysterious-reef-29460.herokuapp.com/api/v1/validate", {
        email: email,
        password: password,
        "content-type": "application/json"
      })
      .then(response => response.data)
      .catch(error => {
        throw new Error(error);
      });
  },
  getProfile(id) {
    return axios
      .get(`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${id}`)
      .then(response => response.data)
      .catch(error => {
        throw new Error(error);
      });
  }
};
