import DropDown from '../../components/DropDown/DropDown'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { StyledItemDetailsWrapper, StyledImgContainer, StyledInfoContainer, StyledChoiceContainer, StyledImage, StyledRatingWrapper, 
    StyledQuantityWrapper, StyledAdd, StyledQuantityButton, StyledQuantity, StyledPrice, StyledStar, StyledStarWrapper } 
from '../../utilities/ItemDetails/StyledItemDetails'
import starImage from '../../images/star.png'

const ItemDetails = (props) => {

    const { isOpen, state, handleSetState, isPending, setIsPending } = props;
    const { id } = useParams();
    let [quantity, setQuantity] = useState(1);

    const url = `https://fitout-shop-default-rtdb.firebaseio.com/.json`;

    useEffect(() => {
        props.setIsPending(true);
        axios.get(url)
                .then(res => {
                    handleSetState(res.data);
                    setIsPending(false);
                })
                .catch(err => {
                    console.log(err);
                });
    }, [url]);

    return (
        <div>
            {isOpen && <DropDown />}
            {!isPending && Object.values(state).filter(x => x.id === id).map(x => (
                <div key={x.id} className="container">
                    <div className="row">
                        <StyledItemDetailsWrapper className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <StyledImgContainer>
                                <StyledImage url={x.url} />
                            </StyledImgContainer>
                            <StyledInfoContainer>
                                <StyledRatingWrapper>
                                    <p>5.0 /</p>
                                    <StyledStarWrapper>
                                        <StyledStar src={starImage} alt=""/>
                                        <StyledStar src={starImage} alt=""/>
                                        <StyledStar src={starImage} alt=""/>
                                        <StyledStar src={starImage} alt=""/>
                                        <StyledStar src={starImage} alt=""/>
                                    </StyledStarWrapper>
                                </StyledRatingWrapper>
                                <h1>{x.title}</h1>
                                <StyledPrice>Price: ${x.price}</StyledPrice>
                                <p style={{borderTop: '1px solid grey', fontSize: '20px', paddingTop: '10px'}}>{x.description}</p>
                                <p style={{fontSize: '15px', textTransform: 'uppercase'}}>Product id: {x.id}</p>
                                <StyledChoiceContainer>
                                    <h2>Choose size:</h2>
                                    <div style={{display: 'flex'}}>
                                        <div>40</div>
                                        <div>41</div>
                                        <div>42</div>
                                        <div>43</div>
                                    </div>
                                    <h2>Select quantity:</h2>
                                    <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
                                        <StyledQuantityWrapper>
                                            <StyledQuantityButton style={{cursor: 'pointer'}} onClick={() => quantity > 1 ? setQuantity(quantity -= 1) : null}>-</StyledQuantityButton>
                                            <StyledQuantity>{quantity}</StyledQuantity>
                                            <StyledQuantityButton style={{cursor: 'pointer'}} onClick={() => quantity < 9 ? setQuantity(quantity += 1) : null}>+</StyledQuantityButton>
                                        </StyledQuantityWrapper>
                                        <StyledAdd>Add to cart</StyledAdd>
                                    </div>
                                </StyledChoiceContainer>
                            </StyledInfoContainer>
                        </StyledItemDetailsWrapper>
                    </div>
                </div>
            ))}
            
        </div>
    );
}
 
export default ItemDetails;