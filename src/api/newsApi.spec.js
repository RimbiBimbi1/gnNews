import { getNewsApiUrl } from './newsApi';
describe('newsApi', () => {
    it('should return newsApi url with given parameters', () => {
        //given
        const endpoint = '/some/endpoint';
        const apiKey = 'someApiKey123';
        const params = { param1: 'value1', param2: 'value2' };

        //when
        const actualUri = getNewsApiUrl(endpoint, { params }, apiKey);

        //then
        expect(actualUri).toEqual(
            'https://newsapi.org/some/endpoint?apiKey=someApiKey123&param1=value1&param2=value2'
        );
    });
});
