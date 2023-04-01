import styles from './Button.module.css';

const Button = ({ children, className, onClick }) => {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    children: [],
    className: '',
    onClick: () => {},
};

export { Button };
