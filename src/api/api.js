import * as axios from "axios";

export const authAPI = {
  authUser(email, password) {
    return axios
      .post("https://mysterious-reef-29460.herokuapp.com/api/v1/validate", {
        email: email,
        password: password,
        "content-type": "application/json"
      })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};
