import axios from "axios";

const customAxios = axios.create({
  baseURL: 'http://localhost:8000',
})

customAxios.interceptors.request.use(
  (config) => {
    const authentication = localStorage.getItem('authentication');

    if(authentication){
      const authenticationObj = JSON.parse(authentication);

      console.log(authenticationObj.token)
      config.headers['Authorization'] = `Bearer ${authenticationObj.token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
)

customAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const token = localStorage.getItem('authentication');

    if(error.response.status === 401 && token){
      localStorage.removeItem('authentication')
    }

    return Promise.reject(error)
  }
)

export default customAxios;