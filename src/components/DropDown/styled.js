import styled from 'styled-components';
import {border} from '../../styleguide/constants';

export const Container = styled.div`
    display: flex;
    justify-content: ${({alignment}) => alignment === 'right' ? 'flex-end' : 
    alignment === 'center' ? 'center' : 'flex-start'};

    .MuiInput-underline:not(.Mui-disabled)::before {
        border-bottom: ${border.default.width} ${border.default.style} ${border.default.color};
    }

    .MuiInput-underline:after {
        border: none;
    }
`;