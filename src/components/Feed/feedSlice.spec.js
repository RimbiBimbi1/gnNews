import feedReducer, { setNumberOfNews, selectNumberOfNews } from './feedSlice';

describe('feed reducer', () => {
    const initialState = {
        numberOfNews: 0,
    };

    it('should handle initial state', () => {
        //given
        const state = undefined;
        const action = { type: 'unknown' };
        //when
        const actualState = feedReducer(state, action);

        //then
        expect(actualState).toEqual(initialState);
    });

    it('should handle setNumberOfNews', () => {
        //given
        const state = { numberOfNews: 0 };
        const action = { type: setNumberOfNews, payload: 5 };
        //when
        const actualState = feedReducer(state, action);

        //then
        expect(actualState).toEqual({ numberOfNews: 5 });
    });
});
