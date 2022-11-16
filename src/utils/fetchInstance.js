const API_URL = process.env.REACT_APP_API_URL;

let originalRequest = async (url, options) => {
  url = API_URL + url;
  return fetch(url, options);
};

let refreshToken = async (refresh_token) => {
  let res = await fetch(API_URL + "/auth/refresh", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + refresh_token,
    },
  });
  let json = await res.json();
  localStorage.setItem("access_token", json.access_token);
  return json;
};

let customRequest = async (url, options) => {
  let access_token = localStorage.getItem("access_token");
  let refresh_token = localStorage.getItem("refresh_token");

  options.headers = {
    ...options.headers,
    Authorization: "Bearer " + access_token,
  };

  let res = await originalRequest(url, options);
  if (res.status === 401) {
    let json = await refreshToken(refresh_token);
    access_token = json.access_token;
    options.headers = {
      ...options.headers,
      Authorization: "Bearer " + access_token,
    };
    res = await originalRequest(url, options);
  }
  return res;
};
