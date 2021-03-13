import { StyledCreateWrapper, StyledCreateContainer, StyledForm, StyledButton, StyledInput, StyledLabel, StyledDes } from '../../utilities/Create/StyledCreate'
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'react-uuid'
import axios from 'axios'
import { useState } from 'react'

const Create = (props) => {

    const errorImg = 'https://image.freepik.com/free-vector/error-404-found-glitch-effect_8024-4.jpg';

    const [isPending, setIsPending] = useState(false);

    const createProduct = () => {
        
        const newId = uuid();
        setIsPending(true);

        if (props.state.title && props.state.description && props.state.price) {
            axios({
                method: 'post',
                url: 'https://fitout-shop-default-rtdb.firebaseio.com/.json',
                data: {
                  title: props.state.title,
                  description: props.state.description,
                  price: props.state.price,
                  url: props.state.url || errorImg,
                  id: newId,
                }
            }).then(() => {
                setIsPending(false);
            })
        }

    }

    return (
        <div className="container">
            <StyledCreateWrapper className="row">
                <h1>Add Product</h1>

                <StyledCreateContainer className="col-md-6">

                    <StyledForm action="">
                        <StyledLabel htmlFor="title">Title:</StyledLabel>
                        <StyledInput onChange={e => props.handleSetState({...props.state, title: e.target.value})} type="text" name="title" id="title"/>

                        <StyledLabel htmlFor="body">Description:</StyledLabel>
                        <StyledDes onChange={e => props.handleSetState({...props.state, description: e.target.value})} type="text" name="description" id="description"/>

                        <StyledLabel htmlFor="author">Price:</StyledLabel>
                        <StyledInput onChange={e => props.handleSetState({...props.state, price: e.target.value})} type="number" min="1" step="1" name="price" id="price"/>

                        <StyledLabel htmlFor="img">Image url:</StyledLabel>
                        <StyledInput onChange={e => props.handleSetState({...props.state, url: e.target.value})} type="text" name="img" id="img"/>
                    </StyledForm>

                    {!isPending && <StyledButton onClick={createProduct} className="create-blog-btn">Add Product</StyledButton>}
                    {isPending && <StyledButton disabled onClick={createProduct} className="create-blog-btn">Adding Product...</StyledButton>}

                </StyledCreateContainer>
            </StyledCreateWrapper>
        </div>
    );
}
 
export default Create;