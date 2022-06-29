import {
    useLocation,
    matchRoutes,
    useResolvedPath,
    Link as L,
} from 'react-router-dom';
import styled from 'styled-components/macro';

import { BREAKPOINTS } from '../../constants/breakpoints';
import { ROUTES } from '../../constants/routes';

const Link = ({
    to,
    exact,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
}) => {
    useLocation();
    let location = useLocation();
    let resolvedPath = useResolvedPath(to);
    let routeMatches = matchRoutes(ROUTES, location);

    let isActive;
    if (exact) {
        isActive = location.pathname === resolvedPath.pathname;
    } else {
        isActive = routeMatches.some(
            match => match.pathname === resolvedPath.pathname
        );
    }

    let allClassNames =
        className +
        (isActive ? ` ${activeClassName}` : ` ${inactiveClassName}`);

    return <L className={allClassNames} to={to} {...rest} />;
};

/*

//////////////////// STYLING


 */

export const NavLink = styled(Link)`
    font-size: var(--font-md);
    p {
        font-size: var(--font-md);
    }

    // Desktop Navigation Links
    &.desktop-nav-link {
        padding-block: var(--padding-sm);
        border-left: var(--border-width-xxl) solid transparent;
        border-right: var(--border-width-xxl) solid transparent;
        color: var(--color-gray-100);
        display: flex;
        align-items: center;
        gap: var(--padding-md);
        padding-left: 15%;

        & svg {
            fill: var(--color-gray-100);
        }

        @media screen and ${BREAKPOINTS.xl} {
            justify-content: center;
            padding-left: 0;

            p {
                display: none;
            }
        }

        &--active {
            background-color: var(--color-orange-200);
            border-color: var(--color-gray-100);
            border-right: var(--border-width-xxl) solid transparent;
            color: var(--color-orange-400);

            & svg {
                fill: var(--color-orange-400);
            }
        }
    }

    // Mobile Navigation Links
    &.mobile-nav-link {
        position: relative;
        display: flex;
        align-items: center;
        height: var(--height-mobile-nav);
        padding-inline: var(--padding-sm);

        svg {
            fill: var(--color-gray-100);
            display: flex;
            width: 28px;
            height: 28px;
            @media screen and ${BREAKPOINTS.smMin} {
                width: 32px;
                height: 32px;
            }
        }

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: var(--border-width-md);
            width: 100%;
        }

        &--active {
            &::after {
                background-color: var(--color-gray-100);
            }
        }
        @media screen and ${BREAKPOINTS.smMin} {
            &::after {
                height: var(--border-width-lg);
            }
        }
    }

    // Settings / Help Page Links

    &.settings-link {
        color: var(--color-gray-600);
        padding: var(--padding-sm) var(--padding-md);
        width: 100%;
        font-size: calc(var(--font-md) * 1.1);

        &--active {
            background-color: var(--color-gray-200);
            border-radius: var(--border-radius-sm);
        }
    }

    // Button group Links
    &.button-group {
        font-size: var(--font-sm);
        display: grid;
        grid-template-columns: repeat(auto-fill, 1fr);
        width: 100%;
        justify-content: center;
        color: var(--color-orange-300);
        background-color: var(--color-gray-100);
        padding: var(--btn-padding-normal);
        text-transform: uppercase;
        font-weight: var(--font-weight-bold);

        &--dark {
            background-color: var(--color-gray-200);
        }

        &--active {
            color: var(--color-gray-100);
            background-color: var(--color-orange-300);
        }

        @media screen and ${BREAKPOINTS.smMin} {
            font-size: calc(var(--font-md) * 1.1);
        }
    }

    // FAQ Link
    &.faq-link {
        color: var(--color-gray-600);
        font-size: var(--font-sm);
        padding: var(--padding-sm) var(--padding-md);
        width: 100%;

        @media screen and ${BREAKPOINTS.lgMin} {
            &--active {
                color: var(--color-gray-100);
                background-color: var(--color-orange-300);
                border-radius: var(--border-radius-sm);
            }
        }

        @media screen and ${BREAKPOINTS.lg} {
            padding: 0;
            padding-bottom: var(--padding-xs);
            border-bottom: solid var(--border-width-xs) transparent;

            &--active {
                border-color: var(--color-orange-400);
            }
        }

        @media screen and ${BREAKPOINTS.smMin} {
            font-size: calc(var(--font-md) * 1.1);
        }
    }

    // Discover Link
    &.discover-link {
        line-height: var(--line-height-sm);
        color: var(--color-gray-600);
        font-size: var(--font-xl);
        padding-bottom: var(--padding-xs);
        border-bottom: solid var(--border-width-md) transparent;

        &--active {
            border-color: var(--color-orange-400);
        }
    }

    // Home Habits Tab Link
    &.habits-link {
        font-size: var(--font-xxs);
        color: var(--color-gray-600);
        padding-inline: var(--padding-sm);
        padding-block: calc(var(--padding-xs) * 0.75);
        padding-bottom: var(--padding-sm);
        margin-bottom: -0.75rem;

        &--active {
            color: var(--color-orange-400);
            background-color: var(--color-gray-200);
            border-top-left-radius: var(--border-radius-sm);
            border-top-right-radius: var(--border-radius-sm);
            box-shadow: var(--shadow-md);

            @media screen and ${BREAKPOINTS.lgMin} {
                background-color: var(--color-gray-100);
            }
        }

        @media screen and ${BREAKPOINTS.smMin} {
            font-size: var(--font-xs);
        }
    }
`;
