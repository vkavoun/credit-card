export const createRequest = (method, url, contentType = 'application/json; charset=UTF-8') => {
    const http = new XMLHttpRequest();
    http.open(method, url, true);

    http.setRequestHeader('Content-type', contentType);
    http.setRequestHeader('Accept-Language', 'en');
    http.setRequestHeader('Accept', 'application/json, text/javascript, */*');
    http.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    return http;
};

export const tryStringify = value => (value !== null && value.length > 0 ? value.toString() : null);

export const extractErrorMessage = ({ responseText, status, statusText }) => {
    try {
        const { message } = JSON.parse(responseText).errors[0];
        return String.trim(message || `${status}: ${statusText}`);
    } catch (error) {
        if (status >= 200 && status < 400) {
            return String.trim(tryStringify(responseText), ' "');
        }
        return `${status} ${statusText}`;
    }
};

export const createJsonHandler = (http, resolve, reject) => () => {
    if (http.readyState === http.DONE) {
        const { status, responseText } = http;
        if (status >= 200 && status < 400) {
            resolve(JSON.parse(responseText || '{}'));
        } else {
            reject(new Error(extractErrorMessage(http)));
        }
    }
};

export const getJson = (url) => {
    const http = createRequest('GET', url);

    return new Promise((resolve, reject) => {
        http.onreadystatechange = createJsonHandler(http, resolve, reject);
        http.send();
    });
};

export const postJson = (url, data) => {
    const http = createRequest('POST', url);

    return new Promise((resolve, reject) => {
        http.onreadystatechange = createJsonHandler(http, resolve, reject);
        http.send(JSON.stringify(data));
    });
};
