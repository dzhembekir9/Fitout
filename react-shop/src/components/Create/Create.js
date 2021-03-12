import { StyledCreateWrapper, StyledCreateContainer, StyledForm, StyledButton, StyledInput, StyledLabel, StyledDes } from '../../utilities/Create/StyledCreate'
import 'bootstrap/dist/css/bootstrap.min.css'

const Create = () => {
    return (
        <div className="container">
            <StyledCreateWrapper className="row">
                <h1>Add Product</h1>

                <StyledCreateContainer className="col-md-6">

                    <StyledForm action="">
                        <StyledLabel htmlFor="title">Title:</StyledLabel>
                        <StyledInput type="text" name="title" id="title"/>

                        <StyledLabel htmlFor="body">Description:</StyledLabel>
                        <StyledDes type="text" name="description" id="description"/>

                        <StyledLabel htmlFor="author">Price:</StyledLabel>
                        <StyledInput type="number" min="1" max="10000" step="1" name="price" id="price"/>
                    </StyledForm>

                    <StyledButton className="create-blog-btn">Add Product</StyledButton>

                </StyledCreateContainer>
            </StyledCreateWrapper>
        </div>
    );
}
 
export default Create;