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
                    1 jan - 7 jan
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
    max-width: 45px;
    margin-inline: auto;

    &.active {
        background-color: var(--color-orange-500);
        color: var(--color-gray-100);
    }

    @media screen and ${BREAKPOINTS.smMin} {
        max-width: 80px;
        padding-block: var(--padding-xs);
        padding-inline: var(--padding-sm);
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--padding-xs);

    @media screen and ${BREAKPOINTS.lgMin} {
        flex-direction: row;
        gap: 0;
    }
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and ${BREAKPOINTS.lgMin} {
        flex-basis: 30%;
        flex-direction: column;
        background-color: var(--color-orange-500);
        border-radius: var(--border-radius-md);
        padding-block: calc(var(--padding-xs) * 1.5);
        padding-inline: var(--padding-sm);

        ${Paragraph} {
            color: var(--color-gray-100);
        }
    }
`;

const DatesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
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
