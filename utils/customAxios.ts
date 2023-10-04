import axios from "axios";

const customAxios = axios.create({
  baseURL: 'http://localhost:8000',
})

customAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if(token){
      console.log('token', token)
      config.headers['Authorization'] = `Bearer ${JSON.parse(token)}`;
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
    const token = localStorage.getItem('token');

    if(error.response.status === 401 && token){
      localStorage.removeItem('token')
    }

    return Promise.reject(error)
  }
)

export default customAxios;