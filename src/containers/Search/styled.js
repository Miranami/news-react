import styled from 'styled-components';
import {media, space} from '../../styleguide/constants';

export const Container = styled.article`
    max-width: ${media.md};
    margin: auto;
    padding: 0 ${space.xs};
`;