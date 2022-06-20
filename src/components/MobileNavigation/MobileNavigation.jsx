import styled from 'styled-components/macro';

import MobileOnly from '../MobileOnly';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { NavLink } from '../NavLink';

import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Discover } from '../../assets/discover.svg';
import { ReactComponent as Settings } from '../../assets/settings.svg';
import { ReactComponent as Help } from '../../assets/help.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import Modal from '../Modal';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { VARIANTS } from '../../constants/variants';

const MobileNavigation = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <MobileOnly>
            <Modal isOpen={modalIsOpen} setModal={setModalIsOpen} />
            <Wrapper>
                <List>
                    <ListItem>
                        <NavLink
                            to='home'
                            className='mobile-nav-link'
                            activeClassName='mobile-nav-link--active'
                        >
                            <Home />
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink
                            to='discover'
                            className='mobile-nav-link'
                            activeClassName='mobile-nav-link--active'
                        >
                            <Discover />
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <motion.a
                            onClick={() => setModalIsOpen(true)}
                            variants={VARIANTS.button}
                            whileTap='whileTap'
                        >
                            <Ellipse>
                                <Plus stroke='var(--color-orange-400)' />
                            </Ellipse>
                        </motion.a>
                    </ListItem>
                    <ListItem>
                        <NavLink
                            to='settings'
                            className='mobile-nav-link'
                            activeClassName='mobile-nav-link--active'
                        >
                            <Settings />
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink
                            to='help'
                            className='mobile-nav-link'
                            activeClassName='mobile-nav-link--active'
                        >
                            <Help />
                        </NavLink>
                    </ListItem>
                </List>
            </Wrapper>
        </MobileOnly>
    );
};

export default MobileNavigation;

const Wrapper = styled.nav`
    width: 100vw;
    height: var(--height-mobile-nav);
    position: fixed;
    bottom: 0;
    background-color: var(--color-orange-400);
    z-index: 10;
`;

const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and ${BREAKPOINTS.smMin} {
        justify-content: space-around;
    }
`;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Ellipse = styled.div`
    display: flex;
    background-color: var(--color-gray-100);
    width: 36px;
    height: 36px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;

    @media screen and ${BREAKPOINTS.smMin} {
        width: 42px;
        height: 42px;
    }
`;
