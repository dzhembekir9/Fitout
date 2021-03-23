import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledSearchBar, StyledSearchBarWrapper, StyledSearchResultsWrapper, StyledSearchResultsContainer } from '../../utilities/SearchBar/StyledSearchBar'


const SearchBar = ({state}) => {

    const [result, setResult] = useState([]);

    const searchItem = (e) => {
        
        if (e.target.value && state) {
            const res = Object.values(state)
            .filter(x => x.title.toLowerCase().includes(e.target.value.toLowerCase()));

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
            <StyledSearchBar onFocus={e => searchItem(e)} onChange={e => searchItem(e)} placeholder="Search..."/>
            <StyledSearchResultsWrapper>
                    { result.map(x => 
                    <Link onClick={() => setResult([])} key={x.id} to={`/item/${x.id}`} style={{textDecoration: 'none'}}>
                        <StyledSearchResultsContainer>{x.title} - ${x.price}</StyledSearchResultsContainer>
                    </Link>) }  
            </StyledSearchResultsWrapper>
        </StyledSearchBarWrapper>
    );
}
 
export default SearchBar;