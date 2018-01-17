import axios from 'axios'

const headers = { 'Authorization': 'whatever-you-want' }
const baseUrl = 'http://localhost:3001'

export function get(url) {
    url = baseUrl + url;
    return axios({
        method: 'get',
        url,
        headers
    })
}

export function post(url, data) {
    url = baseUrl + url;
    return axios({
        method: 'post',
        url,
        data,
        headers
    })
}

export function put(url, data) {
    url = baseUrl + url;
    return axios({
        method: 'put',
        url,
        data,
        headers
    })
}

export function deleteData(url, data) {
    url = baseUrl + url;
    return axios({
        method: 'delete',
        url,
        ...data,
        headers
    })
}