import { useState } from 'react';
import { StyledSearchBar, StyledSearchBarWrapper, StyledSearchResultsWrapper, StyledSearchResultsContainer } from '../../utilities/SearchBar/StyledSearchBar'


const SearchBar = (props) => {

    const [result, setResult] = useState([]);

    const searchItem = (e) => {

        if (e.target.value) {
            const res = Object.values(props.state)
            .filter(x => e.target.value.toLowerCase() === x.title.substring(0, e.target.value.length).toLowerCase());

            if (res[0]) {
                const allResults = res.map(x => x);
                setResult(allResults);
            }
            else {
                setResult([]);
            }
        }
        else {
            setResult([]);
        }
    }

    return (
        <StyledSearchBarWrapper>
            <StyledSearchBar onChange={e => searchItem(e)} onBlur={() => setResult([])} placeholder="Search..."/>
            <StyledSearchResultsWrapper>
                    { result.map(x => <StyledSearchResultsContainer>{x.title} - ${x.price}</StyledSearchResultsContainer>) }  
            </StyledSearchResultsWrapper>
        </StyledSearchBarWrapper>
    );
}
 
export default SearchBar;