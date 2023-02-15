import styles from '../../styles/authentication.module.css';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'googlesignin',
    inverted: 'inverted'
};

const getButtonClass = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base]: 'base',
        [BUTTON_TYPE_CLASSES.google]: 'googlesignin',
        [BUTTON_TYPE_CLASSES.inverted]: 'inverted',

    }[buttonType]
);

const Button = ({ children, buttonType, ...otherProps }) => {
    const buttonClass = getButtonClass(buttonType);

    return (
        <button
            className={`${styles.BaseButton} ${styles[buttonClass]}`}
            {...otherProps}>
            {children}
        </button>
    )
};

export default Button;
