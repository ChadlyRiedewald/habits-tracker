import { Fragment } from 'react';
import styled from 'styled-components/macro';

import * as Discover from './Discover';
import DummyCards from './DummyCards';
import Subtitle from '../Subtitle';
import MobileOnly from '../MobileOnly';
import DesktopOnly from '../DesktopOnly';
import { Card } from '../Card';

const DiscoverContent = () => {
    return (
        <Fragment>
            <MobileOnly>
                <Discover.Wrapper>
                    <Discover.Flex>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </Discover.Flex>
                    <FlexColumn>
                        <Subtitle>Popular</Subtitle>
                        <Discover.Flex>
                            <DummyCards />
                        </Discover.Flex>
                    </FlexColumn>
                </Discover.Wrapper>
            </MobileOnly>
            <DesktopOnly width='true'>
                <FlexColumn>
                    <Discover.Banner />
                    <FlexColumn margin='true'>
                        <h2>Popular</h2>
                        <Discover.Grid>
                            <DummyCards />
                        </Discover.Grid>
                    </FlexColumn>
                </FlexColumn>
            </DesktopOnly>
        </Fragment>
    );
};

export default DiscoverContent;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--padding-sm);
    margin-top: ${p => p.margin && 'var(--margin-md)'};
`;
