import { formatDate, formatHour } from './formatDate';

describe('formatDate', () => {
    it('should convert YYYY-MM-DDTHH:MM:SSZ date to DD.MM.YYYY', () => {
        //given
        const given = '2023-03-30T18:21:14Z';

        //when
        const actualDate = formatDate(given);

        //then
        expect(actualDate).toEqual('30.03.2023');
    });

    it('should extract time (HH:MM) from YYYY-MM-DDTHH:MM:SSZ date', () => {
        //given
        const given = '2023-03-30T18:21:14Z';

        //when
        const actualDate = formatHour(given);

        //then
        expect(actualDate).toEqual('18:21');
    });
});
