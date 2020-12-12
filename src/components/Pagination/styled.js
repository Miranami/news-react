import styled from 'styled-components';
import {Pagination as PaginationMaterialUI} from '@material-ui/lab';
import {space} from '../../styleguide/constants';

export const Pagination = styled(PaginationMaterialUI)`
    display: flex;
    justify-content: center;
    margin: ${space.sm} 0 ${space.md};
`;