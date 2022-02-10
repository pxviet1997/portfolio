import axios from 'axios';

export default function ajax(url, data = {}, type = 'GET', header = {}) {
  return new Promise((resolve, reject) => {
    let promise;

    if (type === 'GET') {
      promise = axios.get(url, {
        params: data,
      }, header);
    } else {
      console.log(url);
      promise = axios.post(url, data, header);
    }

    promise
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error.response);
      });
  });
}