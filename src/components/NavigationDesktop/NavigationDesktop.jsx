import styled from 'styled-components/macro';
import TabletOnly from '../TabletOnly';

const NavigationDesktop = () => {
    return (
        <TabletOnly>
            <Wrapper>
                <p>sidebar</p>
            </Wrapper>
        </TabletOnly>
    );
};

export default NavigationDesktop;

const Wrapper = styled.div`
    width: var(--width-navigation);
    background-color: var(--color-orange-400);
    height: 100%;
`;
