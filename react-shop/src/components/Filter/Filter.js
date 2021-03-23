import { StyledFilter, StyledFilterWrapper, StyledSelect } from '../../utilities/Filter/StyledFilter'

const Filter = ({state, handleSetState}) => {
    const products = Object.values(state);

    const handleFilter = (e) => {
        
        if (e.target.value === 'default') {
            //TODO
        } else if (e.target.value === 'title-as') {
            handleSetState(products.sort((a, b) => a.title.localeCompare(b.title)));
        } else if (e.target.value === 'title-des') {
            handleSetState(products.sort((a, b) => b.title.localeCompare(a.title)));
        } else if (e.target.value === 'price-as') {
            handleSetState(products.sort((a, b) => a.price - b.price));
        } else if (e.target.value === 'price-des') {
            handleSetState(products.sort((a, b) => b.price - a.price));
        }

    }

    return (
        <StyledFilterWrapper>
            <StyledFilter>Sort by: </StyledFilter>
            <StyledSelect onChange={(e) => handleFilter(e)} name="filter" id="filter">
                <option value="default">Default order</option>
                <option value="title-as">Title (Ascending)</option>
                <option value="title-des">Title (Descending)</option>
                <option value="price-as">Price (Ascending)</option>
                <option value="price-des">Price (Descending)</option>
            </StyledSelect>
        </StyledFilterWrapper>
    );
}
 
export default Filter;