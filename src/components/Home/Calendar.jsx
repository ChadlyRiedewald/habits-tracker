import styled from 'styled-components/macro';
import { Paragraph } from '../Paragraph';
import { BREAKPOINTS } from '../../constants/breakpoints';

const Calendar = () => {
    return (
        <Wrapper>
            <Flex>
                <Paragraph fontSize='12px' small='true'>
                    Week 1
                </Paragraph>
                <Paragraph fontSize='12px' small='true'>
                    01-01-2022 - 07-01-2022
                </Paragraph>
            </Flex>
            <DatesWrapper>
                <Date date='01' day='Mon' />
                <Date date='02' day='Tue' />
                <Date date='03' day='Wed' />
                <Date date='04' day='Thu' active='active' />
                <Date date='05' day='Fri' />
                <Date date='06' day='Sat' />
                <Date date='07' day='Sun' />
            </DatesWrapper>
        </Wrapper>
    );
};

export default Calendar;

const Date = ({ date, day, active }) => {
    return (
        <DateWrapper className={active}>
            <DateNumber>{date}</DateNumber>
            <Day>{day}</Day>
        </DateWrapper>
    );
};

const DateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(var(--padding-xs) * 0.5);
    padding-block: calc(var(--padding-xs) * 0.5);
    padding-inline: calc(var(--padding-xs) * 1.5);
    border-radius: var(--border-radius-md);

    &.active {
        background-color: var(--color-orange-500);
        color: var(--color-gray-100);
    }

    @media screen and ${BREAKPOINTS.smMin} {
        padding-block: var(--padding-xs);
        padding-inline: var(--padding-sm);
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--padding-xs);
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DatesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
`;

const Day = styled(Paragraph)`
    text-transform: uppercase;
    font-size: 11px;

    @media screen and ${BREAKPOINTS.smMin} {
        font-size: 16px;
    }
`;

const DateNumber = styled(Paragraph)`
    font-size: 20px;

    @media screen and ${BREAKPOINTS.smMin} {
        font-size: 26px;
    }
`;
