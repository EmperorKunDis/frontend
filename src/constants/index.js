export const navLinks = [
    {
        id: 'Object008',
        name: 'Login',
        href: '#login',
    },
    {
        id: 'Object004001',
        name: 'Leadership',
        href: '#leadership',
    },
    {
        id: 'Book',
        name: 'Media',
        href: '#media',
    },
    {
        id: 'polySurface17001',
        name: 'Where We Are',
        href: '#contact',
    },
    {
        id: 'Object008',
        name: 'Join us',
        href: '#joinus',
    },
    {
        id: 'Scroll',
        name: 'Contact',
        href: '#contact',
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet, isDesktop) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.03 : 0.06,
        deskPosition: isMobile ? [0, 0, -4] : isDesktop ? [2, -4, -3] : [0, -0.04, -3],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};
