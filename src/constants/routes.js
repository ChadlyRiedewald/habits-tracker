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
