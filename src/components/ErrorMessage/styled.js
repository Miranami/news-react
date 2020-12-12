import styled from 'styled-components';
import {space} from '../../styleguide/constants';

export const Container = styled.div`
    width: 100%;
    margin: ${space.lg} 0;
    display: flex;
    justify-content: center;
`;

export const Message = styled.em`
    font-style: normal;
    font-weight: 700;
`;