import React from 'react';
import {InputLabel, Select, MenuItem} from '@material-ui/core';
import {Container} from './styled';

const DropDown = ({options = [], value, onChange, alignment = 'left'}) => (
    <Container alignment={alignment}>
        <div>
            <InputLabel
                shrink
                htmlFor="age-native-label-placeholder">
                News per Page:
            </InputLabel>

            <Select
                value={value}
                onChange={e => onChange(e)}
                inputProps={{
                    name: 'Show per page',
                    id: 'select-page-size',
                }}
            >
                {options.map(option =>
                    <MenuItem
                        key={option}
                        value={option}>
                        {option}
                    </MenuItem>
                )}
            </Select>

        </div>
    </Container>
);

export default DropDown;