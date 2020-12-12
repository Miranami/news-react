import React from 'react';
import {CircularProgress} from '@material-ui/core';
import {Container} from './styled';

const Loader = ({props}) => <Container>
    <CircularProgress {...props} />
</Container>

export default Loader;
