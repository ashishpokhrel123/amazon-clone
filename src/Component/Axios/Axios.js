import axios from './axios';

const instance = axios.create({
    baseURL:"http://localhost:5000/clone-a3117/us-central1/api"
});

export default instance;