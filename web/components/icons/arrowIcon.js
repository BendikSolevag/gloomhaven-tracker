const ArrowIcon = ({ classNames }) => {
    return (
        <svg
            viewBox="0 0 25 18"
            fill="none"
            className={classNames}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22 9L0 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinejoin="round"
            />
            <path
                d="M15 1L23 8.99996L15.0001 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default ArrowIcon;
