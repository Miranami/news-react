import styled from 'styled-components';
import {space, border, fontSize} from '../../styleguide/constants';

const inputHeight = '40px';

export const Container = styled.form`
    position: relative;
    margin: ${space.sm} 0;
`;

export const Label = styled.label`
    display: block;
    font-weight: 400;
    font-size: ${fontSize.lg};
    margin-bottom: ${space.xs};
`;

export const Input = styled.input`
    display: flex;
    width: 100%;
    height: ${inputHeight};
    padding: ${space.xxs} ${space.xs} ${space.xxs} ${inputHeight};
    border: ${border.default.width} ${border.default.style} ${border.default.color};
    border-radius: ${inputHeight};
    outline: none;
    font-size: ${fontSize.md};
`;

export const Button = styled.button`
    position: absolute;
    bottom: ${border.default.width};
    left: ${border.default.width};
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(${inputHeight} - ${border.default.width} * 2);
    height: calc(${inputHeight} - ${border.default.width} * 2);
    border-radius: 50%;
    cursor: pointer;
    font-size: ${fontSize.md};
    outline: none;
`;