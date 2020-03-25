import 'whatwg-fetch';

const REST_ROOT = "http://localhost:2525";

export default class FetchApi {
    static getRequest = (serviceURI) => {
        return fetch(REST_ROOT + serviceURI,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
    };


    static postRequest = (serviceURI, postData) => {
        return fetch(REST_ROOT + serviceURI,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(postData)
            });
    };
    static deleteRequest = (serviceURI, id) => {
       return  fetch(REST_ROOT + serviceURI + id, {
            method: 'DELETE',
        });
    };
    static postAjaxRequest = (serviceURI, postData) => {
        return fetch(serviceURI,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(postData)
            });
    }
}
