import axios from 'axios';


// axios.defaults.withCredentials = true;

class Api {
    static get = (requestPath: string, payload?: {}) => {

        const url = process.env.API_END_POINT + requestPath;

        const request = axios.request({
            url: url,
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            // params: payload,
            timeout: 20000,
            responseType: 'json',
        }).then(res => res.data,
            error =>  error
        );

        return request;
    }
}

export { Api }