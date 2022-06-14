import { Fragment } from 'react';
import styled from 'styled-components/macro';
import GlobalStyles from './globalStyles';
import NavigationDesktop from './components/NavigationDesktop';
import NavigationMobile from './components/NavigationMobile';

const App = () => {
    return (
        <Fragment>
            <GlobalStyles />
            <OuterContainer>
                <NavigationDesktop />
                <NavigationMobile />
                <InnerContainer></InnerContainer>
            </OuterContainer>
        </Fragment>
    );
};

export default App;

const OuterContainer = styled.div`
    display: flex;
    height: 100vh;
`;

const InnerContainer = styled.div`
    display: flex;
    width: 100%;
`;
