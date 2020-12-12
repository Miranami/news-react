import React, {useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {Container, Label, Input, Button} from './styled';

const SearchBox = ({id, label, onChange}) => {
    const inputRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        inputRef.current.blur();
    }

    return (
        <Container
            id={`searchForm${id}`}
            role="search"
            onSubmit={e => handleSubmit(e)}
        >
            <Label htmlFor={id}>{label}</Label>

            <Input
                type="search"
                ref={inputRef}
                id={id}
                placeholder="Search here"
                onChange={e => onChange(e)}
            />

            <Button type="button" aria-label="search">
                <FontAwesomeIcon icon={faSearch}/>
            </Button>
        </Container>
    )
};

export default SearchBox;