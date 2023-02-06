import { styled } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { animateProps, moveUpAnimation } from '../../utils/constants';
//======================================================
const FooterRoot = styled('div')<animateProps>(({animate}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100%',
    // maxHeight: '300px',
    backgroundColor: 'black',
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
//======================================================
const Footer = () => {
  const { ref: footerRef, inView: footerInView } = useInView();

  return (
    <FooterRoot ref={footerRef} animate={footerInView}>
      <p>Footer</p>
    </FooterRoot>
  )
}
//======================================================
export default Footer;