import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dev-burger-builder-939a7.firebaseio.com/'
});

export default instance;