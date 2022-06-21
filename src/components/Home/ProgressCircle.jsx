import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

const ProgressCircle = ({ size, progress, strokeWidth }) => {
    const [offset, setOffset] = useState(0);

    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circum = 2 * Math.PI * 22;

    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circum;
        setOffset(progressOffset);
    }, [setOffset, progress, circum]);

    return (
        <Div>
            <svg width={size} height={size} className='svg'>
                <circle
                    className='svg-circle-bg'
                    stroke='var(--color-gray-200)'
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                ></circle>
                <circle
                    className='svg-circle'
                    stroke='var(--color-orange-500)'
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circum}
                    strokeDashoffset={offset}
                    transform={`rotate(-90, ${center}, ${center})`}
                ></circle>
                <text className='svg-circle-text' x={center} y={center}>
                    {progress}%
                </text>
            </svg>
        </Div>
    );
};

export default ProgressCircle;

const Div = styled.div`
    .svg {
        display: inline-block;
        max-width: 100%;
    }

    .svg-circle-bg {
        fill: none;
        transform: rotate(-90, 25px, 25px);
    }

    .svg-circle {
        fill: none;
    }

    .svg-circle-text {
        text-anchor: middle;
        dominant-baseline: middle;
        font-size: var(--font-xxs);
        fill: var(--color-orange-500);
    }
`;
