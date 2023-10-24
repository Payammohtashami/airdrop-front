import axios from "./http";

type ApiCallPropsType = {
    path: string,
    data?: any,
    params?: any,
    method: 'post' | 'get' | 'put' | 'post' | 'delete',
};

const ApiCall = async ({method, path, data, params}: ApiCallPropsType) => {
    return await axios({
      ...params,
      url: path,
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data,
    }).then((res) => (res));
};

export default ApiCall;