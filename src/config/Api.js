import Api from "./axios";

// create an axios instance
class APIService {
  axios = Api.initiate();

  refreshToken = () => JSON.parse(JSON.parse(localStorage.getItem('persist:root')).login).user.refresh_token

  renewSession = async (error) => {
    const refreshToken = this.refreshToken();
    if (
      error.response &&
      (error.response.status === 401 || error.message === "Token has expires") &&
      refreshToken
    ) {
      try {
        const result = await this.axios.post(
          "/token/refresh",
          {},
          { headers: { Authorization: `Bearer ${refreshToken}` } }
        );
        localStorage.setItem("access_token", result.data.access_token);
        Api.ACCESS_TOKEN = result.data.access_token;
        return result;
      } catch (error) {
        return error;
      }
    } else {
      return error;
    }
  };

  getData = async (url) => {
    return await this.axios.get(`/v1.0${url}`);
  };

  postData = async (url, payload) => {
    return await this.axios.post(`/v1.0${url}`, payload);
  };

  putData = async (url, payload) => {
    return await this.axios.put(`/v1.0${url}`, payload);
  };
}

export default new APIService();