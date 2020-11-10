import axios from 'axios';
import URLs from './URLs';
const instance = axios.create({
    baseURL: URLs.baseURL,
})
instance.interceptors.response.use(res => {
    return res.data;
})
const getData = text => {
    return instance.get(URLs.getData, {
        params: {
            text
        }
    })
}
export default {
    getData
}