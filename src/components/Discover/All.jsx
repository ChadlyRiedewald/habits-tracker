import { Card, Flex, Grid, Wrapper } from './Discover';
import styled from 'styled-components/macro';
import FilterButton from './FilterButton';
import MobileOnly from '../MobileOnly';
import { Fragment, useState } from 'react';
import DesktopOnly from '../DesktopOnly';
import { Divider } from '../Divider';
import Checkbox from '../Checkbox/Checkbox';
import Modal from '../Modal/Modal';
import FilterModal from './FilterModal';

const All = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <Fragment>
            <MobileOnly>
                <Modal
                    isOpen={modalIsOpen}
                    setModal={setModalIsOpen}
                    title='Filter'
                >
                    <FilterModal setModal={setModalIsOpen} />
                </Modal>
                <Wrapper>
                    <FilterButton onClick={() => setModalIsOpen(true)} />
                    <Flex paddingTop={true}>
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
                </Wrapper>
            </MobileOnly>
            <DesktopOnly width={true}>
                <WrapperDesktop>
                    <Left>
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
                    </Left>
                    <Right>
                        <WrapperFilter>
                            <FlexColumn>
                                <h2>Filter</h2>
                                <Divider />
                                <h3>Type</h3>
                                <Checkbox label='Sports' />
                                <Checkbox label='Mind' />
                                <Checkbox label='Hobby' />
                                <Checkbox label='Food' />
                                <Checkbox label='Health' />
                                <Checkbox label='Study' />
                                <Checkbox label='Social' />
                                <Checkbox label='Finance' />
                                <Checkbox label='Business' />
                            </FlexColumn>
                        </WrapperFilter>
                    </Right>
                </WrapperDesktop>
            </DesktopOnly>
        </Fragment>
    );
};

export default All;

const WrapperDesktop = styled.div`
    display: flex;
    justify-content: space-between;
    gap: calc(var(--padding-md) * 1.5);
    width: 100%;
`;

const Left = styled.div`
    width: 100%;
`;

const Right = styled.div`
    width: calc(300px + calc(var(--padding-md) * 3));
`;

/////////// FILTER

const WrapperFilter = styled.div`
    position: fixed;
    top: var(--padding-md);
    right: calc(var(--padding-md) * 1.5);
    display: flex;
    flex-direction: column;
    width: 300px;
    height: calc(100vh - var(--padding-lg));
    background-color: var(--color-gray-100);
    border-radius: var(--border-radius-sm);
    padding-inline: calc(var(--padding-md) * 1.5);
    padding-block: var(--padding-md);
    box-shadow: var(--shadow-elevation-low);
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
