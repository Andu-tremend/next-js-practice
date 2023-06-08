import axios from "axios";

export default class AxiosClient {
  request (method: string, url: string, bodyContent?: any, headers?: Headers ) {
    return axios({
      method,
      url,
      data: bodyContent,
    })
  }
}