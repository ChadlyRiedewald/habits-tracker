import { useContext, useState } from 'react';
import { AuthContext } from '../../hooks/Auth.context';

import styled from 'styled-components/macro';

import MobileOnly from '../MobileOnly';
import NewHabitModal from '../Modals/NewHabitModal';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { VARIANTS } from '../../constants/variants';
import { motion } from 'framer-motion';
import { NavLink } from '../NavLink';

import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Discover } from '../../assets/discover.svg';
import { ReactComponent as Settings } from '../../assets/settings.svg';
import { ReactComponent as Help } from '../../assets/help.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';

const MobileNavigation = () => {
    const { isAuth } = useContext(AuthContext);
    const { button } = VARIANTS;
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <MobileOnly>
            <NewHabitModal
                isOpen={modalIsOpen}
                setModal={setModalIsOpen}
                title='Create new habit'
            />
            <Wrapper>
                <List>
                    <ListItem>
                        <motion.div variants={button} whileTap='whileTap'>
                            <NavLink
                                to='home'
                                className='mobile-nav-link'
                                activeClassName='mobile-nav-link--active'
                            >
                                <Home />
                            </NavLink>
                        </motion.div>
                    </ListItem>
                    <ListItem>
                        <motion.div variants={button} whileTap='whileTap'>
                            <NavLink
                                to='discover'
                                className='mobile-nav-link'
                                activeClassName='mobile-nav-link--active'
                            >
                                <Discover />
                            </NavLink>
                        </motion.div>
                    </ListItem>
                    <ListItem>
                        <motion.a
                            onClick={isAuth ? () => setModalIsOpen(true) : null}
                            variants={button}
                            whileTap='whileTap'
                        >
                            <Ellipse>
                                <Plus
                                    stroke='var(--color-orange-400)'
                                    strokeWidth='2px'
                                />
                            </Ellipse>
                        </motion.a>
                    </ListItem>
                    <ListItem>
                        <motion.div variants={button} whileTap='whileTap'>
                            <NavLink
                                to='settings'
                                className='mobile-nav-link'
                                activeClassName='mobile-nav-link--active'
                            >
                                <Settings />
                            </NavLink>
                        </motion.div>
                    </ListItem>
                    <ListItem>
                        <motion.div variants={button} whileTap='whileTap'>
                            <NavLink
                                to='help'
                                className='mobile-nav-link'
                                activeClassName='mobile-nav-link--active'
                            >
                                <Help />
                            </NavLink>
                        </motion.div>
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
