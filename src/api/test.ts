import axios from '@/utils/axios';
export const testApi = () => {
  return axios.get('/user');
}