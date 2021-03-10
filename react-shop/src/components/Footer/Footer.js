import { StyledFooterWrapper, StyledFooterContainer, StyledCopy } from '../../utilities/Footer/StyledFooter'

const Footer = () => {
    return (
        <StyledFooterWrapper>
            <StyledFooterContainer>
                <p>Info</p>
                <p>Support</p>
                <p>Marketing</p>
            </StyledFooterContainer>
            <StyledFooterContainer>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
            </StyledFooterContainer>
            <StyledCopy>
                <p>&copy; 2021 Fitout | Dzhem Bekir</p>
            </StyledCopy>
        </StyledFooterWrapper>
    );
}
 
export default Footer;