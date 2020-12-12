import React from 'react';
import {Container, Message} from './styled';

const ErrorMessage = ({message}) => <Container>
    <Message>{message}</Message>
</Container>

export default ErrorMessage;