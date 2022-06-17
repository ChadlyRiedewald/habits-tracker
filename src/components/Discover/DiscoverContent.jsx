import { Banner, Card, Flex, Grid, Wrapper } from './Discover';
import styled from 'styled-components/macro';
import Subtitle from '../Subtitle';
import MobileOnly from '../MobileOnly';
import { Fragment } from 'react';
import DesktopOnly from '../DesktopOnly';

const DiscoverContent = () => {
    return (
        <Fragment>
            <MobileOnly>
                <Wrapper>
                    <Flex>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </Flex>
                    <FlexColumn>
                        <Subtitle>Popular</Subtitle>
                        <Flex>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </Flex>
                    </FlexColumn>
                </Wrapper>
            </MobileOnly>
            <DesktopOnly width={true}>
                <FlexColumn>
                    <Banner />
                    <FlexColumn marginTop={true}>
                        <h2>Popular</h2>
                        <Grid>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </Grid>
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
    margin-top: ${p => p.marginTop && 'var(--margin-md)'};
`;
