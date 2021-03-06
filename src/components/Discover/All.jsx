import { Fragment, useState } from 'react';
import styled from 'styled-components/macro';

import * as Discover from './Discover';
import FilterButton from './FilterButton';
import MobileOnly from '../MobileOnly';
import DesktopOnly from '../DesktopOnly';
import FilterMobileModal from '../Modals/FilterMobileModal';
import DummyCards from './DummyCards';
import { DividerHorizontal } from '../Divider';
import HabitTypes from '../HabitTypes';
import { Card } from '../Card';

const All = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <Fragment>
            <MobileOnly>
                <FilterMobileModal
                    isOpen={modalIsOpen}
                    setModal={setModalIsOpen}
                    title='Filter'
                />
                <Wrapper>
                    <FilterButton onClick={() => setModalIsOpen(true)} />
                    <Discover.Flex paddingTop='true'>
                        <DummyCards />
                    </Discover.Flex>
                </Wrapper>
            </MobileOnly>
            <DesktopOnly width='true'>
                <DesktopWrapper>
                    <LeftWrapper>
                        <Discover.Grid>
                            <DummyCards />
                        </Discover.Grid>
                    </LeftWrapper>
                    <RightWrapper>
                        <FilterWrapper>
                            <FlexColumn>
                                <h2>Filter</h2>
                                <DividerHorizontal />
                                <h3>Type</h3>
                                <HabitTypes />
                            </FlexColumn>
                        </FilterWrapper>
                    </RightWrapper>
                </DesktopWrapper>
            </DesktopOnly>
        </Fragment>
    );
};

export default All;

const DesktopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: calc(var(--padding-md) * 1.5);
    width: 100%;
`;

const LeftWrapper = styled.div`
    width: 100%;
`;

const RightWrapper = styled.div`
    width: calc(300px + calc(var(--padding-md) * 3));
`;

const Wrapper = styled(Discover.Wrapper)`
    gap: 0;
`;

/////////// FILTER

const FilterWrapper = styled(Card)`
    position: fixed;
    top: var(--padding-md);
    right: calc(var(--padding-md) * 1.5);
    display: flex;
    flex-direction: column;
    width: 300px;
    height: calc(100vh - var(--padding-lg));
    padding-inline: calc(var(--padding-md) * 1.5);
    padding-block: var(--padding-md);
`;

const FlexColumn = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: calc(var(--padding-sm) * 1.5);

    h3 {
        text-align: left;
    }
`;
