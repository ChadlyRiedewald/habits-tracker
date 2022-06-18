import { Fragment } from 'react';
import styled from 'styled-components/macro';
import GlobalStyles from './constants/globalStyles';
import Div100vh from 'react-div-100vh';

import DesktopNavigation from './components/DesktopNavigation';
import MobileNavigation from './components/MobileNavigation';
import AnimatedRoutes from './components/AnimatedRoutes';

const App = () => {
    return (
        <Fragment>
            <GlobalStyles />
            <OuterContainer>
                <DesktopNavigation />
                <MobileNavigation />
                <InnerContainer>
                    <AnimatedRoutes />
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
