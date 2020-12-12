import styled from 'styled-components';
import {color, media, fontSize, space} from '../../styleguide/constants';

const imgWidth = '300px';

export const Container = styled.article`
    display: flex;
    flex-wrap: wrap;
    margin: ${space.sm} 0;
    min-height: ${imgWidth};

    @media (min-width: ${media.sm}) {
        flex-wrap: nowrap;
    } 
`;

export const TextContainer = styled.article`
    margin: ${space.sm} 0 ${space.xs} 0;
    
    @media (min-width: ${media.sm}) {
        margin: 0 0 0 ${space.sm};
    }
`;

export const Label = styled.span`
    display: inline-block;
    margin-bottom: ${space.xs};
    padding: ${space.xxxs} ${space.xxs};
    font-size: ${fontSize.xs};
    color: white;
    background: ${color.primary};
`;

export const Title = styled.h3`
    font-size: ${fontSize.lg};
    font-weight: 700;
    margin-bottom: ${space.xs};
`;

export const TitleLink = styled.a`
    &:link,
    &:visited,
    &:hover,
    &:active {
        text-decoration: none;
    }
`;

export const Info = styled.div`
    font-size: ${fontSize.sm};
    margin-bottom: ${space.sm};
    color: ${color.fontLight};
`;

export const Author = styled.address`
    display: inline;
    font-style: normal;
`;

export const Description = styled.p`
    margin-bottom: ${space.xs};
    font-size: ${fontSize.md};
    color: ${color.fontLight};
`;

export const Image = styled.img`
    width: 100%;
    height: ${imgWidth};
    object-fit: cover;

    @media (min-width: ${media.sm}) {
        width: ${imgWidth};
        height: ${imgWidth};
    }
`;

export const Link = styled.a`
    display: block;
    font-weight: 700;
    padding: ${space.xxxs} ${space.xxxs} ${space.xxxs} 0;
    
    &:link,
    &:visited,
    &:hover,
    &:active {
        text-decoration: none;
    }
`;