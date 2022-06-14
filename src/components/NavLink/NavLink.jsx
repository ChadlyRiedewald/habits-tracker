import styled from 'styled-components/macro';
import { useLocation, matchRoutes, useResolvedPath } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { Link as L } from 'react-router-dom';
import { BREAKPOINTS } from '../../constants';

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

        @media screen and ${BREAKPOINTS.lg} {
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
        padding: var(--padding-sm);

        svg {
            fill: var(--color-gray-100);
        }

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: var(--border-width-lg);
            width: 100%;
        }

        &--active {
            &::after {
                background-color: var(--color-gray-100);
            }
        }
    }

    // Button group Links
    &.button-group {
        display: flex;
        flex-basis: 50%;
        justify-content: center;
        color: var(--color-orange-300);
        background-color: var(--color-gray-100);
        padding: var(--btn-padding-normal);

        &--active {
            color: var(--color-gray-100);
            background-color: var(--color-orange-300);
        }
    }
`;
