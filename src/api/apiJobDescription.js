
import apiClientTokenAuth from './clientTokenAuth';

const endpoint = '/keyword_extraction_for_URL';

const post = async (data, cancelToken)=>{
    console.log('post data: ', data)
    const response = await apiClientTokenAuth(cancelToken).post(endpoint, data);
    console.log('post', response.ok)
    return response.ok
}



export default{
    post,
}