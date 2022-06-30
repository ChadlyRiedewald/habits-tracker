import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { Wrapper as MyAccount } from '../Settings/MyAccount';
import { Wrapper as Security } from '../Settings/Security';
import { RightWrapper as HomeStats, LeftWrapper as HomeContent } from '../Home';
import { Flex as DiscoverFlex, Grid as DiscoverGrid } from '../Discover';

export const Card = styled.div`
    background-color: var(--color-gray-100);
    box-shadow: var(--shadow-md);
    border-radius: var(--border-radius-sm);

    ${MyAccount} &, ${Security} & {
        @media screen and ${BREAKPOINTS.lg} {
            width: clamp(200px, 100%, 650px);
            margin-inline: auto;
            box-shadow: none;
        }

        @media screen and ${BREAKPOINTS.lgMin} {
            width: clamp(550px, 100%, 800px);
            padding: calc(var(--padding-md) * 1.5);
        }
    }

    ${HomeContent} & {
        border-radius: var(--border-radius-md);
    }

    ${HomeStats} & {
        padding-inline: var(--padding-md);
        padding-block: var(--padding-sm);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    ${DiscoverFlex} &, ${DiscoverGrid} & {
        display: flex;
        height: 256px;

        @media screen and ${BREAKPOINTS.lg} {
            height: 128px;
            width: 128px;
        }
    }
`;
