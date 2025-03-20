import axios from "axios";

const axiosConfig = {
    baseURL: 'http://127.0.0.1:5012/api/v1',
    timeout: 30000
};

const apiInstanse = axios.create(axiosConfig);

export default apiInstanse;