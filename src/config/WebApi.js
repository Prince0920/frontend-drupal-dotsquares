import * as axios from "axios";

var WebApi = {
  getRequest: function (url) {
    return axios
      .get(url)
      .then(function (response) {
        // console.log(response);
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  postRequest: function (url, params) {
    return axios
      .post(url, params)
      .then(function (response) {
        // console.log("response", response);
        return response;
      })
      .catch(function (error) {
        console.log("error", error);
      });
  },
  postRequestCrm: function (url, params) {
    return axios
      .post(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, Content-Type",
        },
        params,
      })
      .then(function (response) {
        // console.log("response", response);
        return response;
      })
      .catch(function (error) {
        console.log("error", error);
      });
  },
};

export default WebApi;
