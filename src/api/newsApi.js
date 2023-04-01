const API_KEY = '';

const DOMAIN = 'https://newsapi.org';
export const ENDPOINTS = {
    everything: '/v2/everything',
    topHeadlines: '/v2/top-headlines',
    sources: '/v2/top-headlines/sources',
};

export const getNewsApiUrl = (endpoint, { params }, apiKey = API_KEY) => {
    if (API_KEY === '') console.log('Put your api key in gnNews/src/api/newsApi.js');

    //get parameter keys
    const paramKeys = Object.keys(params);
    //convert params object to an array of uri compatible param strings
    const uriParamsSeparate = paramKeys.map(key => `&${key}=${params[key]}`);
    //combine
    const uriParamsCombined = uriParamsSeparate.reduce((str1, str2) => str1 + str2, '');

    return DOMAIN + endpoint + `?apiKey=${apiKey}` + uriParamsCombined;
};
