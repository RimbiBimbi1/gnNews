import { render, getByRole, screen } from '@testing-library/react';
import { Button } from './Button';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
    it('should render a button', () => {
        //given
        render(<Button></Button>);

        //then
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should render button children', () => {
        //given
        render(<Button>Come on, click me.</Button>);

        //then
        expect(screen.getByText('Come on, click me.')).toBeInTheDocument();
    });

    it('should execute function passed to the button as "onClick"', async () => {
        //given
        let someNumber = 0;
        const exampleFun = () => {
            someNumber = 5;
        };
        render(<Button onClick={exampleFun} />);
        const button = screen.getByRole('button');

        //when
        await userEvent.click(button);

        //then
        expect(someNumber).toBe(5);
    });
});
