export const VARIANTS = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },

    modal: {
        initial: { opacity: 0, y: '-55%', x: '-50%' },
        animate: {
            opacity: 1,
            y: '-50%',
            x: '-50%',
            transition: {
                type: 'spring',
                stiffness: 200,
                duration: 0.5,
                delay: 0.2,
            },
        },

        exit: {
            opacity: 0,
            y: '-45%',
            x: '-50%',
            transition: {
                when: 'beforeParent',
            },
        },
    },

    overlay: {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },

        exit: {
            opacity: 0,
            transition: {
                when: 'afterChildren',
            },
        },
    },

    button: {
        initial: {
            scale: 1,
        },
        whileHover: {
            scale: 1.1,
        },
        whileTap: {
            scale: 0.95,
        },
    },

    listItem: {
        initial: {
            scale: 1,
        },
        whileHover: {
            scale: 1.1,
        },
        whileTap: {
            scale: 0.95,
        },
    },
};
