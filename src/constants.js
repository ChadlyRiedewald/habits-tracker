export const COLORS = {
    orange: {
        100: '#F8F1E8',
        200: '#FDE9CF',
        300: '#FDCA9D',
        400: '#FEA165',
        500: '#FF8F46',
        600: '#FF802E',
        700: '#FF7217',
    },

    gray: {
        100: '#FFFEFE',
        200: '#F5F5F5',
        300: '#E4E4E4',
        400: '#C2C2C2',
        500: '#A1A1A1',
        600: '#6D6D6D',
        700: '#4A4A4A',
        800: '#303030',
        900: '#222222',
    },

    habits: {
        sports: '#C2ECE7',
        mind: '#D4C2EC',
        hobby: '#C2ECE7',
        food: '#C2ECC2',
        health: '#FBBCA8',
        study: '#ECC2D8',
        finance: '#E8ECC2',
    },

    other: {
        success: 'hsl(160, 100%, 40%)',
        successBg: 'hsla(160, 100%, 40%, 0.1)',
        error: 'hsl(14, 100%, 55%)',
        errorBg: 'hsla(14, 100%, 55%, 0.1)',
        alert: 'hsl(30, 100%, 50%)',
        alertBg: 'hsla(30, 100%, 50%, 0.1)',
    },
};

export const SPACING = {
    xxs: '4',
    xs: '8',
    sm: '16',
    md: '32',
    lg: '64',
    xl: '128',
    xxl: '256',
    xxxl: '512px',
};

export const FONT_SIZES = {
    xxs: '0.875rem',
    xs: '1rem',
    sm: '1.125rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '1.875rem',
    xxl: '3rem',
};

export const FONT_WEIGHTS = {
    normal: 400,
    bold: 700,
};

const BREAKPOINT_SIZES = {
    xs: 320,
    sm: 540,
    md: 900,
    lg: 1024,
    xl: 1440,
};

export const BREAKPOINTS = {
    // max width
    xs: `(max-width: ${BREAKPOINT_SIZES.xs}px)`,
    sm: `(max-width: ${BREAKPOINT_SIZES.sm}px)`,
    md: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
    lg: `(max-width: ${BREAKPOINT_SIZES.lg}px)`,
    xl: `(max-width: ${BREAKPOINT_SIZES.xl}px)`,

    // min width
    xsMin: `(min-width: ${BREAKPOINT_SIZES.xs + 1}px)`,
    smMin: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
    mdMin: `(min-width: ${BREAKPOINT_SIZES.md + 1}px)`,
    lgMin: `(min-width: ${BREAKPOINT_SIZES.lg + 1}px)`,
    xlMin: `(min-width: ${BREAKPOINT_SIZES.xl + 1}px)`,
    desktop: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
};

export const LINE_HEIGHTS = {
    sm: 1,
    md: 1.25,
    lg: 1.5,
};

export const BORDER_RADIUS = {
    sm: '8px',
    md: '16px',
    lg: '32px',
    xl: '64px',
};

export const BORDER_WIDTH = {
    xxs: '1px',
    xs: '2px',
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '10px',
    xxl: '12px',
    xxxl: '14px',
};

export const WIDTH = {
    navigation: {
        sm: '5rem',
        md: '15rem',
    },
};

export const ROUTES = [
    { path: '' },
    // Wrong path
    { path: '*' },
    // Always available
    {
        path: 'help',
        children: [
            { path: '' },
            { path: 'contact' },
            {
                path: 'faq',
                children: [
                    { path: '' },
                    { path: 'account' },
                    { path: 'rewards' },
                    { path: 'habits' },
                ],
            },
        ],
    },

    // When not logged in
    {
        path: 'auth',
        children: [{ path: '' }, { path: 'sign-in' }, { path: 'sign-up' }],
    },

    // When logged in
    { path: 'home', children: [{ path: '' }, { path: 'completed' }] },
    {
        path: 'discover',
        children: [{ path: '' }, { path: 'discover' }, { path: 'all' }],
    },
    {
        path: 'settings',
        children: [{ path: '' }, { path: 'my-account' }, { path: 'security' }],
    },
];
