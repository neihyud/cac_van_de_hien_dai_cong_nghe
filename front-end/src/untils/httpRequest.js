import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'http://localhost:3000/',
});

export const get = async (path, params) => {
    const response = await httpRequest.get(path, params);
    return response.data;
};

export default httpRequest;
