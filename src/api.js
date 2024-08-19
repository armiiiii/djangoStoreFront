import axios from 'axios';

const req = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/',
})

const sendRequest = async (url, method, data) => {
    try {
        const res = await req.request({url: url, method: method, data: data});
        console.log(res.data);
        console.log(typeof(res.data));
        return res.data;
    } catch (err) {
        console.log(err);
    }
}


export function login(username, password) {
    return sendRequest('token/', 'post', {username: username, password: password});
}

export const getProducts = () => {return sendRequest('products/', 'get', {})};
export const getProductsDetail = (id) => {return sendRequest(`products/${id}`, 'get', {})};
export const getProfile = (id) => {return sendRequest(`users/${id}`, 'get', {})};

export const createProduct = (data) => {return sendRequest('products/', 'post', data)}
const createUser = () => {}
