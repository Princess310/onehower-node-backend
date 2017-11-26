import 'whatwg-fetch';

// need to update the api root for production env
export const API_ROOT = `http://localhost:3000/`;
export const WEB_ROOT = 'https://www.onehower.com';

const fetchDao = {
  doGet(url, params) {
    return this.request('GET', url, params);
  },

  doPost(url, params) {
    return this.request('POST', url, params);
  },

  doPut(url, params) {
    return this.request('PUT', url, params);
  },

  doDelete(url, params) {
    return this.request('DELETE', url, params);
  },

  doUploadFile(url, params) {
    return this.request('POST', url, params, true);
  },

  getWebRoot() {
    return WEB_ROOT;
  },

  paramsParse(params) {
    const arr = [];

    Object.keys(params).forEach((key) => {
      arr.push(`${key}=${params[key]}`);
    });

    return `& + ${arr.join('&')}`;
  },

  request(method, u, params, file) {
    const self = this;
    let url = API_ROOT + u;
    const config = {
      method,
      headers: {},
      credentials: 'same-origin',
    };

    // for get request
    if ((method === 'GET') && typeof params !== 'undefined') {
      url += self.paramsParse(params);
    }
    
    if ((method !== 'GET') && typeof params !== 'undefined') {
      const payload = [];
      Object.keys(params).forEach((key) => {
        payload.push(`${key}=${params[key]}`);
      });

      config.body = payload.join('&');

      if (file) {
        const formData = new FormData();
        formData.append('file', params.file);
        config.body = formData;
      } else {
        // change the Content-Type for mime
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
      }
    }
    return new Promise((resolve, reject) => {
      fetch(url, config)
      .then(self.checkStatus)
      .then(self.parseJSON)
      .then((data) => {

        if (data && data.code !== 200) {
          console.log('Some things err for request: ', data);
        } else {
          resolve(data);
        }
      }).catch((error) => {
        reject(error);
      });
    });
  },

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  },

  parseJSON(response) {
    return response.json();
  },
};

export default fetchDao;
