import React from 'react';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    Container,
    TextContainer,
    Label,
    Description,
    Author,
    Image,
    Info,
    Link,
    Title,
    TitleLink
} from './styled';
import noImage from '../../assets/no_image.svg';

const Snippet = ({
                     label,
                     title,
                     date,
                     author,
                     description,
                     url,
                     urlToImage
                 }) => <Container>
    <a href={url}>
        <Image
            src={urlToImage || noImage}
            onError={(e) => e.target.src = noImage}
            alt=""/>
    </a>

    <TextContainer>
        <Label>
            {label}
        </Label>

        <TitleLink href={url}>
            <Title>{title}</Title>
        </TitleLink>

        <Info>
            <time>{date}</time>
            {author && ', by: '}
            <Author>{author}</Author>
        </Info>

        <Description>
            {description}
        </Description>

        <Link href={url}>
            More info <FontAwesomeIcon icon={faArrowRight}/>
        </Link>
    </TextContainer>
</Container>;

export default Snippet;