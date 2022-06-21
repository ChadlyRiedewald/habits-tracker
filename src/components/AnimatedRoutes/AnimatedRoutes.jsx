import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useContext, Fragment } from 'react';
import { AuthContext } from '../../hooks/Auth.context';
import RedirectRoutes from '../../hooks/RedirectRoutes';
import { AnimatePresence } from 'framer-motion';

import Help from '../Help';
import Contact from '../Help/Contact';
import Faq from '../Help/Faq';
import Account from '../Help/Account';
import Rewards from '../Help/Rewards';
import Habits from '../Help/Habits';
import Auth from '../Auth';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import Home from '../Home';
import Discover from '../Discover';
import DiscoverContent from '../Discover/DiscoverContent';
import All from '../Discover/All';
import Settings from '../Settings';
import MyAccount from '../Settings/MyAccount';
import Security from '../Settings/Security';
import Scores from '../Home/Scores';
import HomeHabits from '../Home/Habits';

const AnimatedRoutes = () => {
    const { isAuth } = useContext(AuthContext);
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter='true'>
            <Routes location={location} key={location.pathname}>
                {/* Redirecting default Route */}
                <Route index element={<RedirectRoutes isAuth={isAuth} />} />
                {/* Always available */}
                <Route path='help' element={<Help />}>
                    <Route path='' element={<Navigate to='faq' />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='faq' element={<Faq />}>
                        <Route path='' element={<Navigate to='account' />} />
                        <Route path='account' element={<Account />} />
                        <Route path='rewards' element={<Rewards />} />
                        <Route path='habits' element={<Habits />} />
                    </Route>
                </Route>

                {/* TODO 404 not found page*/}
                <Route path='*' element={<RedirectRoutes isAuth={isAuth} />} />
                {/* Conditional Routes */}
                {!isAuth && (
                    <Fragment>
                        <Route path='auth' element={<Auth />}>
                            <Route
                                path=''
                                element={<Navigate to='sign-in' />}
                            />
                            <Route path='sign-in' element={<SignIn />} />
                            <Route path='sign-up' element={<SignUp />} />
                        </Route>
                    </Fragment>
                )}
                {isAuth && (
                    <Fragment>
                        <Route path='home' element={<Home />}>
                            <Route path='' element={<Navigate to='habits' />} />
                            <Route path='habits' element={<HomeHabits />} />
                            <Route path='scores' element={<Scores />} />
                        </Route>
                        <Route path='discover' element={<Discover />}>
                            <Route
                                path=''
                                element={<Navigate to='discover' />}
                            />
                            <Route
                                path='discover'
                                element={<DiscoverContent />}
                            />
                            <Route path='all' element={<All />} />
                        </Route>
                        <Route path='settings' element={<Settings />}>
                            <Route
                                path=''
                                element={<Navigate to='my-account' />}
                            />
                            <Route path='my-account' element={<MyAccount />} />
                            <Route path='security' element={<Security />} />
                        </Route>
                    </Fragment>
                )}
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
