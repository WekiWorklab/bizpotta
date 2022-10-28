import axios from "axios";

function getToken() {
  if (
    typeof window !== "undefined" &&
    window.localStorage.getItem("bizpotta_token")
  ) {
    let token = localStorage.getItem("bizpotta_token") ?? null;
    return token;
  }
  return null;
}

let AxoisApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_API_URL,
});

AxoisApi.defaults.headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json",
};

AxoisApi.interceptors.response.use(
  function (response) {
    let datares = response.data;
    if (typeof datares == "object") {
      if (
        Number(datares?.status) === 400 ||
        Number(datares?.status) === 401 ||
        Number(datares?.status) === 500
      ) {
        return Promise.reject(response);
      }
    }

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

AxoisApi.interceptors.request.use(function (config) {
  if (getToken()) {
    config.headers.Authorization = `Bearer ${getToken()}`;
  }

  return config;
});

export default AxoisApi;
