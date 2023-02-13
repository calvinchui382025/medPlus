import styled from '@emotion/styled';
import { Card, Typography, FormControl, Select, TextField, Button } from '@mui/material';
import { Root } from '../../styled-components';
import { animateProps, niceBoxShadow, moveRightAnimation, moveDownAnimation, contactFadeOut, contactFadeIn } from '../../utils/constants';

export const ContactRoot = styled(Root)({
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'gainsboro',
});
export const CardsContainer = styled('div')(({theme}) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '200px 48px',
    margin: '0px',

    '@media (max-width: 600px)': {
      flexDirection: 'column',
      padding: '12px'

    },
    // @ts-ignore
    backgroundColor: theme?.palette.background.paper,
  })
)
export const BackgroundCard = styled(Card)<animateProps>(({animate}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: niceBoxShadow,
    borderRadius: '16px',
    backgroundColor: '#1d1c1d',
    width: '100%',
    animation: `${moveRightAnimation} 2s`,
  })
)
export const BackgroundCardHeader = styled('div')({
  width: '100%',
  minHeight: '48px',
  display: 'flex',
})
export const BackgroundImageContainer = styled('div')({
  width: '100%',
  height: '100%',
  minHeight: '200px',
})
export const BackgroundCardFooter = styled('div')({
  width: '100%',
  // height: '100%',
  minHeight: '100px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  padding: '24px 24px',
})
export const BackgroundCardFootText = styled(Typography)({
  fontSize: '0.7rem',
  fontWeight: 'bold',
  color: 'gainsboro',
})
export const ContactCard = styled(Card)<animateProps>(({animate}) => ({
    width: '100%',
    maxWidth: '400px',
    
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    borderRadius: '16px',
    boxShadow: niceBoxShadow,
    position: 'absolute',
    top: '230px',
    right: '100px',
    zIndex: 2,
    marginBottom: '12px',

    height: animate ? '100px' : '600px',
    animation: `${moveDownAnimation} 2s`,
    transition: 'all 1s ease-in-out',
    // animation: animate ? `${moveLeftAnimation} 2s` : 'none',

    '@media (max-width: 600px)': {
      position: 'inherit'
    },
  })
)
export const StyledMuiFormControl = styled(FormControl)({
  width: '90%',
    '& .MuiFormLabel-root': {
      fontSize: '12px',
      fontWeight: '700',
      left: '-14px',
      top: '26px',
  },
})
export const StyledDropdowns = styled(Select)({
  // width: '90%',
  height: '48px',
  fontSize: '12px',
  fontWeight: '700',

})
export const StyledTextField = styled(TextField)({
  width: '90%',
  height: '48px',
  '& .MuiFormLabel-root': {
    fontSize: '12px !important',
    fontWeight: '700',
  },
})
export const SubmitButton = styled(Button)<animateProps>(({animate}) => ({
    animation: animate ? `${contactFadeOut} 1s` : `${contactFadeIn} 3s`,
    opacity: animate ? 0 : 1,
    transition: 'all 3s ease-in-out',
  })
)
export const ContactHeader = styled('div')<animateProps>(({animate}) => ({
    padding: '12px',
    display: 'flex',
    animation: animate ? `${contactFadeOut} 1s` : `${contactFadeIn} 2s`,
    opacity: animate ? 0 : 1,
    height: animate ? '0px' : '48px',
    transition: 'all 0.2s ease-in-out',
  })
)
export const ContactFormText = styled(Typography)({
  fontSize: '0.7rem',
  fontWeight: 'bold',
})
export const ContactFormContainer = styled('div')<animateProps>(({animate}) => ({
    
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',

    height: animate ? '0px' : '100%',
    transition: 'all 1s ease-in-out',
    animation: animate ? `${contactFadeOut} 1s` : `${contactFadeIn} 1s`,
    opacity: animate ? 0 : 1,
  })
)
export const SubmitContainer = styled('div')<animateProps>(({animate}) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '12px',
    height: animate ? '0px' : '',
    transition: 'all 1s ease-in-out',
    width: animate ? '0px' : '100%',
  })
)
export const MarkerTextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  color: 'black',
  backgroundColor: 'gainsboro',
  height: '24px',
  width: '100px',
  padding: '1px',
  // 
  borderRadius: '8px',
})
export const MarkerText = styled(Typography)({

})

export const FillerContainer = styled('div')<animateProps>(({animate}) =>({
    width: '100%',
  })
)
export const SpinnerContainer = styled('div')<animateProps>(({animate}) =>({
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      // backgroundColor: 'orange',
      position: 'relative',
      left: '-12px',
      top: '-9px',
  })
)

export const SubmitButtonContainer = styled('div')<animateProps>(({animate}) =>({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  })
)