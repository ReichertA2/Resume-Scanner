import apiClientTokenAuth from "./clientTokenAuth";

const endpoint = "/keyword_results";

const post = async (data, cancelToken) => {
  console.log("post data: ", data);
  const response = await apiClientTokenAuth(cancelToken).post(endpoint, data);
  console.log("post", response.ok);
  return response;
};

export default {
  post,
};
