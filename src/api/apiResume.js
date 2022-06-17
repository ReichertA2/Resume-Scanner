import apiClientTokenAuth from "./clientTokenAuth";

const endpoint = "/keyword_extraction_for_text";

const post = async (data, cancelToken) => {
  console.log("post data: ", data);
  const response = await apiClientTokenAuth(cancelToken).post(endpoint, data);
  console.log("post", response.ok);
  return response.ok;
};

const del= async (token, cancelToken)=>{
  const response = await apiClientTokenAuth(token, cancelToken).delete(endpoint);
  return response.ok
}


export default {
  post,
  del
};
