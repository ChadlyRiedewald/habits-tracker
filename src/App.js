import { Fragment, useContext } from 'react';
import styled from 'styled-components/macro';
import GlobalStyles from './globalStyles';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './hooks/Auth';

import NavigationDesktop from './components/NavigationDesktop';
import NavigationMobile from './components/NavigationMobile';
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
                <NavigationDesktop />
                <NavigationMobile />
                <InnerContainer>
                    <Routes>
                        {/* Redirecting default Route */}
                        <Route
                            index
                            element={<AuthWrapper isAuth={isAuth} />}
                        />

                        {/* Always available */}
                        <Route path='help' element={<Help />}>
                            <Route path='' element={<Contact />} />
                            <Route path='faq' element={<Faq />}>
                                <Route path='' element={<Account />} />
                                <Route path='rewards' element={<Rewards />} />
                                <Route path='habits' element={<Habits />} />
                            </Route>
                        </Route>
                        <Route
                            path='*'
                            element={<AuthWrapper isAuth={isAuth} />}
                        />

                        {/* Conditional Routes */}
                        {!isAuth && (
                            <Fragment>
                                <Route path='auth' element={<Auth />}>
                                    <Route path='' element={<SignIn />} />
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
                                    {/*<Route*/}
                                    {/*    path=''*/}
                                    {/*    element={<DiscoverContent />}*/}
                                    {/*/>*/}
                                    {/*<Route path='all' element={<All />} />*/}
                                </Route>
                                <Route path='settings' element={<Settings />}>
                                    {/*<Route path='' element={<MyAccount />} />*/}
                                    {/*<Route*/}
                                    {/*    path='security'*/}
                                    {/*    element={<Security />}*/}
                                    {/*/>*/}
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

const OuterContainer = styled.div`
    display: flex;
    height: 100vh;
    margin-bottom: var(--height-mobile-nav);
`;

const InnerContainer = styled.div`
    margin-left: var(--width-navigation);
    display: flex;
    width: 100%;
`;
