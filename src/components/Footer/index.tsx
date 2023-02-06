import { styled } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { animateProps, moveUpAnimation } from '../../utils/constants';
//======================================================
const FooterRoot = styled('div')<animateProps>(({animate}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100%',
    // maxHeight: '300px',
    backgroundColor: '#242524',
    color: 'white',
    // fontSize: '1.5rem',
    // fontWeight: 'bold',
    // fontFamily: 'Roboto',
    // textTransform: 'uppercase',
    // letterSpacing: '0.1rem',
    // animation: animate ? `${moveUpAnimation} 1s` : 'none',
    width: '100%'
  })
)
const FooterImageContainer = styled('div')({
  backgroundColor: '#181819',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  
})
const FooterImage = styled('img')({
  maxWidth: '600px',
});
//======================================================
const Footer = () => {
  const { ref: footerRef, inView: footerInView } = useInView();

  return (
    <FooterRoot ref={footerRef} animate={footerInView}>
      <FooterImageContainer>
        <FooterImage
          src="/images/footer-saying.jpg" 
          alt="footer" 
          width="100%"
        />
      </FooterImageContainer>
      <p>Footer</p>
    </FooterRoot>
  )
}
//======================================================
export default Footer;