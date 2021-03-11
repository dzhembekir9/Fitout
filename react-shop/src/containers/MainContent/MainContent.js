import Item from '../../components/Item/Item'
import { StyledItemsWrapper } from '../../utilities/Item/StyledItem'
import 'bootstrap/dist/css/bootstrap.min.css'

const MainContent = () => {
    return (
        <div className="container">
            <div className="row justify-content-around">
                <div className=" col-lg-4 col-md-6 col-sm-6 col-xs-12 mx-md-5">
                    <Item title="MacMillan" description="asdasasdasdasdsssssss" price={96.99} url="https://www.dunhill.com/product_image/12249965vf/f/w750_be4e4e4.jpg"/>
                </div>
                <div className=" col-lg-4 col-md-6 col-sm-6 col-xs-12 mx-md-5">
                    <Item title="Jacket" description="some desc" price={50.99} url="https://www.bfgcdn.com/1500_1500_90/004-1032-0211/canada-goose-macmillan-parka-winter-jacket.jpg"/>
                </div>
                <div className="justify-content-around col-lg-4 col-md-6 col-sm-6 col-xs-12 mx-md-5">
                    <Item title="Jeans" description="lorem10000" price={30.99} url="https://i8.amplience.net/i/Lindex/7953567_766_PS_F/blue-hanna-wide-high-waist-jeans-with-cropped-leg?$fmtJpg$&$cache$&$crop$&$scaleFit$&$productDetailSwiper$&vw=600"/>
                </div>
            </div>
            <div className="row">
                <div className=" col-lg-4 col-md-6 col-sm-6 col-xs-12 mx-md-5">
                    <Item title="MacMillan" description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" price={96.99} url="https://www.dunhill.com/product_image/12249965vf/f/w750_be4e4e4.jpg"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mx-md-5">
                    <Item title="Jacket" description="some desc" price={50.99} url="https://www.bfgcdn.com/1500_1500_90/004-1032-0211/canada-goose-macmillan-parka-winter-jacket.jpg"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mx-md-5">
                    <Item title="Jeans" description="lorem10000" price={30.99} url="https://i8.amplience.net/i/Lindex/7953567_766_PS_F/blue-hanna-wide-high-waist-jeans-with-cropped-leg?$fmtJpg$&$cache$&$crop$&$scaleFit$&$productDetailSwiper$&vw=600"/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mx-md-5">
                    <Item title="MacMillan" description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" price={96.99} url="https://www.dunhill.com/product_image/12249965vf/f/w750_be4e4e4.jpg"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mx-md-5">
                    <Item title="Jacket" description="some desc" price={50.99} url="https://www.bfgcdn.com/1500_1500_90/004-1032-0211/canada-goose-macmillan-parka-winter-jacket.jpg"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mx-md-5">
                    <Item title="Jeans" description="lorem10000" price={30.99} url="https://i8.amplience.net/i/Lindex/7953567_766_PS_F/blue-hanna-wide-high-waist-jeans-with-cropped-leg?$fmtJpg$&$cache$&$crop$&$scaleFit$&$productDetailSwiper$&vw=600"/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-col-6 col-sm-6 col-xs-12 mx-md-5">
                    <Item title="MacMillan" description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" price={96.99} url="https://www.dunhill.com/product_image/12249965vf/f/w750_be4e4e4.jpg"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mx-md-5">
                    <Item title="Jacket" description="some desc" price={50.99} url="https://www.bfgcdn.com/1500_1500_90/004-1032-0211/canada-goose-macmillan-parka-winter-jacket.jpg"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mx-md-5">
                    <Item title="Jeans" description="lorem10000" price={30.99} url="https://i8.amplience.net/i/Lindex/7953567_766_PS_F/blue-hanna-wide-high-waist-jeans-with-cropped-leg?$fmtJpg$&$cache$&$crop$&$scaleFit$&$productDetailSwiper$&vw=600"/>
                </div>
            </div>
        </div>
    );
}
 
export default MainContent;

/* <StyledItemsWrapper>
            <Item title="MacMillan" description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" price={96.99} url="https://www.dunhill.com/product_image/12249965vf/f/w750_be4e4e4.jpg"/>
            <Item title="Jacket" description="some desc" price={50.99} url="https://www.bfgcdn.com/1500_1500_90/004-1032-0211/canada-goose-macmillan-parka-winter-jacket.jpg"/>
            <Item title="Jeans" description="lorem10000" price={30.99} url="https://i8.amplience.net/i/Lindex/7953567_766_PS_F/blue-hanna-wide-high-waist-jeans-with-cropped-leg?$fmtJpg$&$cache$&$crop$&$scaleFit$&$productDetailSwiper$&vw=600"/>
            <Item title="Shoes" description="lorem10000" price={60.99} url="https://underarmour.scene7.com/is/image/Underarmour/3022584-001_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688"/>
            <Item title="MacMillan" description="Tsek" price={96.99} url="https://www.dunhill.com/product_image/12249965vf/f/w750_be4e4e4.jpg"/>
            <Item title="Jacket" description="lorem10000" price={50.99} url="https://www.bfgcdn.com/1500_1500_90/004-1032-0211/canada-goose-macmillan-parka-winter-jacket.jpg"/>
            <Item title="Jeans" description="lorem10000" price={30.99} url="https://i8.amplience.net/i/Lindex/7953567_766_PS_F/blue-hanna-wide-high-waist-jeans-with-cropped-leg?$fmtJpg$&$cache$&$crop$&$scaleFit$&$productDetailSwiper$&vw=600"/>
            <Item title="Shoes" description="lorem10000" price={60.99} url="https://underarmour.scene7.com/is/image/Underarmour/3022584-001_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688"/>
            <Item title="MacMillan" description="Tsek" price={96.99} url="https://www.dunhill.com/product_image/12249965vf/f/w750_be4e4e4.jpg"/>
            <Item title="Jacket" description="lorem10000" price={50.99} url="https://www.bfgcdn.com/1500_1500_90/004-1032-0211/canada-goose-macmillan-parka-winter-jacket.jpg"/>
            <Item title="Jeans" description="lorem10000" price={30.99} url="https://i8.amplience.net/i/Lindex/7953567_766_PS_F/blue-hanna-wide-high-waist-jeans-with-cropped-leg?$fmtJpg$&$cache$&$crop$&$scaleFit$&$productDetailSwiper$&vw=600"/>
            <Item title="Shoes" description="lorem10000" price={60.99} url="https://underarmour.scene7.com/is/image/Underarmour/3022584-001_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688"/>
        </StyledItemsWrapper> */