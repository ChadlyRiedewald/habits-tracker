import { Fragment, useContext } from 'react';
import styled from 'styled-components/macro';
import GlobalStyles from './constants/globalStyles';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './hooks/Auth.context';
import Div100vh from 'react-div-100vh';

import DesktopNavigation from './components/DesktopNavigation';
import MobileNavigation from './components/MobileNavigation';
import Help from './components/Help';
import Home from './components/Home';
import Discover from './components/Discover';
import Settings from './components/Settings';
import Auth from './components/Auth';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Contact from './components/Help/Contact';
import Faq from './components/Help/Faq';
import Account from './components/Help/Account';
import Rewards from './components/Help/Rewards';
import Habits from './components/Help/Habits';
import DiscoverContent from './components/Discover/DiscoverContent';
import All from './components/Discover/All';
import MyAccount from './components/Settings/MyAccount';
import Security from './components/Settings/Security';

const App = () => {
    const { isAuth } = useContext(AuthContext);

    const AuthWrapper = ({ isAuth }) => {
        return isAuth ? (
            <Navigate to='/home' replace />
        ) : (
            <Navigate to='/auth' replace />
        );
    };

    return (
        <Fragment>
            <GlobalStyles />
            <OuterContainer>
                <DesktopNavigation />
                <MobileNavigation />
                <InnerContainer>
                    <Routes>
                        {/* Redirecting default Route */}
                        <Route
                            index
                            element={<AuthWrapper isAuth={isAuth} />}
                        />
                        {/* Always available */}
                        <Route path='help' element={<Help />}>
                            <Route path='' element={<Navigate to='faq' />} />
                            <Route path='contact' element={<Contact />} />
                            <Route path='faq' element={<Faq />}>
                                <Route
                                    path=''
                                    element={<Navigate to='account' />}
                                />
                                <Route path='account' element={<Account />} />
                                <Route path='rewards' element={<Rewards />} />
                                <Route path='habits' element={<Habits />} />
                            </Route>
                        </Route>

                        {/* TODO 404 not found page*/}
                        <Route
                            path='*'
                            element={<AuthWrapper isAuth={isAuth} />}
                        />
                        {/* Conditional Routes */}
                        {!isAuth && (
                            <Fragment>
                                <Route path='auth' element={<Auth />}>
                                    <Route
                                        path=''
                                        element={<Navigate to='sign-in' />}
                                    />
                                    <Route
                                        path='sign-in'
                                        element={<SignIn />}
                                    />
                                    <Route
                                        path='sign-up'
                                        element={<SignUp />}
                                    />
                                </Route>
                            </Fragment>
                        )}
                        {isAuth && (
                            <Fragment>
                                <Route path='home' element={<Home />}>
                                    {/*<Route path='' element={<ToDo />} />*/}
                                    {/*<Route*/}
                                    {/*    path='completed'*/}
                                    {/*    element={<Completed />}*/}
                                    {/*/>*/}
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
                                    <Route
                                        path='my-account'
                                        element={<MyAccount />}
                                    />
                                    <Route
                                        path='security'
                                        element={<Security />}
                                    />
                                </Route>
                            </Fragment>
                        )}
                    </Routes>
                </InnerContainer>
            </OuterContainer>
        </Fragment>
    );
};

export default App;

const OuterContainer = styled(Div100vh)`
    display: flex;
`;

const InnerContainer = styled(Div100vh)`
    margin-left: var(--width-nav);
    margin-bottom: var(--height-mobile-nav);
    display: flex;
    width: 100%;
`;
