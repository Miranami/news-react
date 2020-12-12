import React, {useState, useEffect} from 'react';
import {Container} from './styled';
import SearchBox from '../../components/SearchBox';
import Snippet from '../../components/Snippet';
import Pagination from '../../components/Pagination';
import DropDown from '../../components/DropDown';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';
import {color} from '../../styleguide/constants';

const Search = () => {
    const [pageSize, setPageSize] = useState(10);
    const [searchRequest, setSearchRequest] = useState('');
    const [breakingNewsError, setBreakingNewsError] = useState(null);
    const [isBreakingNewsLoaded, setIsBreakingNewsLoaded] = useState(false);
    const [breakingNewsItems, setBreakingNews] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const breakingNewsURL = `http://newsapi.org/v2/top-headlines`
            + `?country=us`
            + `&apiKey=648c7598f414416891d2d11ee28b9134`
            + `&pageSize=${pageSize}`
            + `&page=${currentPage}`
            + `&q=${searchRequest}`;
        const breakingNewsRequest = new Request(breakingNewsURL);

        fetch(breakingNewsRequest)
            .then(res => res.json())
            .then(
                res => {
                    if (res.status !== 'ok') {
                        setBreakingNewsError(new Error("Something went wrong, please reload the page"));
                    } else {
                        setIsBreakingNewsLoaded(true);
                        setBreakingNews(res?.articles);
                        setTotalResults(res?.totalResults);
                    }
                },
                err => {
                    setIsBreakingNewsLoaded(true);
                    setBreakingNewsError(err);
                })
    }, [pageSize, searchRequest, currentPage]);

    const handlePageSizeChange = ({target}) => setPageSize(target.value);

    const handleSearchRequestChange = (e) => {
        e.preventDefault();
        setCurrentPage(1);
        setSearchRequest(e.target.value);
    };

    const handlePageChange = page => setCurrentPage(page);

    const renderResults = () => !isBreakingNewsLoaded
        ? <Loader color={color.greyDefault}/>
        : <> {breakingNewsItems.map(({
                                         source: {name},
                                         title,
                                         author,
                                         publishedAt,
                                         description,
                                         url,
                                         urlToImage
                                     }) => (
            <Snippet key={url} {...{
                label: name,
                title,
                author,
                date: `${publishedAt.slice(0, 10)} at ${publishedAt.slice(11, 16)}`,
                description,
                url,
                urlToImage
            }} />))}

            {totalResults > 0 && <Pagination
                defaultPage={currentPage}
                page={currentPage}
                count={Math.ceil(totalResults / pageSize)}
                onChange={(e, page) => handlePageChange(page)}
                showFirstButton
                showLastButton
            />}
        </>;

    return (
        <Container>
            <SearchBox
                id="newsSearch"
                label="Search for the latest news:"
                onChange={handleSearchRequestChange}
            />
            <DropDown
                options={[5, 10, 20]}
                onChange={handlePageSizeChange}
                value={pageSize}
                alignment="right"
            />

            {breakingNewsError
                ? <ErrorMessage message={`Error: ${breakingNewsError.message}`}/>
                : renderResults()}
        </Container>
    );
};

export default Search;