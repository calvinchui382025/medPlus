import styled from '@emotion/styled'
import { Button, Card, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import GoogleMapReact from 'google-map-react'
import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import { Root } from '../../styled-components'
import { animateProps, contactFadeIn, contactFadeOut, fadeIn, fadeOut, moveDownAnimation, moveLeftAnimation, moveRightAnimation, niceBoxShadow } from '../../utils/constants'
import { mapStyles } from './mapStyles'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { PropagateLoader } from 'react-spinners';
import { mainColor } from '../../App'
//============================================================================== 
const designationList = [
  'C.C.P.',
  'CNRA',
  'D.C.',
  'D.D.S.',
  'D.M.D.',
  'D.O.',
  'D.P.M.',
  'M.D.',
  'Medical Director',
  'MSN',
  'NP',
  'NPT',
  'O.D.',
  'P.A.',
  'Ph.D.',
  'RN',
  'Other',
];
const contactMethods = ['Phone', 'Email', 'Mail', 'Text', 'Other']
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const medPlusLatLong = { lat: 29.67561129384909, lng: -95.55940824563754 }
const mapCenter = { lat: 29.674176846912186, lng: -95.5500312429117 }

// 29.67281585490315, -95.5500312429117
// ============================== STYLED COMPONENTS =============================
const ContactRoot = styled(Root)({
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'gainsboro',
});
const CardsContainer = styled('div')({
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
})
const BackgroundCard = styled(Card)<animateProps>(({animate}) => ({
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
const BackgroundCardHeader = styled('div')({
  width: '100%',
  minHeight: '48px',
  display: 'flex',
})
const BackgroundImageContainer = styled('div')({
  width: '100%',
  height: '100%',
  minHeight: '200px',
})
const BackgroundCardFooter = styled('div')({
  width: '100%',
  // height: '100%',
  minHeight: '100px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  padding: '24px 24px',
})
const BackgroundCardFootText = styled(Typography)({
  fontSize: '0.7rem',
  fontWeight: 'bold',
  color: 'gainsboro',
})
const ContactCard = styled(Card)<animateProps>(({animate}) => ({
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
const StyledMuiFormControl = styled(FormControl)({
  width: '90%',
    '& .MuiFormLabel-root': {
      fontSize: '12px',
      fontWeight: '700',
      left: '-14px',
      top: '26px',
  },
})
const StyledDropdowns = styled(Select)({
  // width: '90%',
  height: '48px',
  fontSize: '12px',
  fontWeight: '700',

})
const StyledTextField = styled(TextField)({
  width: '90%',
  height: '48px',
  '& .MuiFormLabel-root': {
    fontSize: '12px !important',
    fontWeight: '700',
  },
})
const SubmitButton = styled(Button)<animateProps>(({animate}) => ({
    animation: animate ? `${contactFadeOut} 1s` : `${contactFadeIn} 3s`,
    opacity: animate ? 0 : 1,
      // transition: 'all 3s ease-in-out',
  })
)
const ContactHeader = styled('div')<animateProps>(({animate}) => ({
    padding: '12px',
    display: 'flex',
    animation: animate ? `${contactFadeOut} 1s` : `${contactFadeIn} 1s`,
    opacity: animate ? 0 : 1,
    height: animate ? '0px' : '48px',
    transition: 'all 0.2s ease-in-out',
  })
)
const ContactFormText = styled(Typography)({
  fontSize: '0.7rem',
  fontWeight: 'bold',
})
const ContactFormContainer = styled('div')<animateProps>(({animate}) => ({
    
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
const SubmitContainer = styled('div')<animateProps>(({animate}) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: '12px',
    // animation: animate ? `${contactFadeOut} 1s` : `${contactFadeIn} 1s`,
    // opacity: animate ? 0 : 1,
    height: animate ? '0px' : '',
    transition: 'all 1s ease-in-out',
  })
)
const MarkerTextContainer = styled('div')({
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
const MarkerText = styled(Typography)({

})
//============================================================================== 
const MyMarker = ({ text }: any) => (
  <MarkerTextContainer>
    <MarkerText>
      {text}
    </MarkerText>
    <LocationOnIcon fontSize='large' style={{color:'red'}}/>
  </MarkerTextContainer>
)
//==============================================================================
export const Contact = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [preferredMethodOfContact, setPreferredMethodOfContact] = useState<any>('')
  const [howCanWeHelpYou, setHowCanWeHelpYou] = useState<string>('')
  const [designation, setDesignation] = useState<any>()

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {

  }, [])

  const handleSubmit = () => {
    console.log({
      name,
      email,
      phoneNumber,
      preferredMethodOfContact,
      howCanWeHelpYou,
      designation,
    })

    // window.location.href=`mailto:info@medplusllc.com`
    setLoading(!loading);
    
    // setLoading(true);
    setTimeout(() => {  
      setLoading(false);
    }, 4000);
      
}

  const handleMarkerClick = () => {
    console.log('clicked')
    window.open(
      'https://www.google.com/maps/place/MedPlus+LLC/@29.6754399,-95.5615433,17z/data=!3m2!4b1!5s0x8640c2aafdd00d8b:0x7f5d3c76c59201e6!4m5!3m4!1s0x8640c2aafe179287:0x6b6a33268ef3a113!8m2!3d29.6754353!4d-95.5593546'
    )
  }

  return (
    <ContactRoot>
      <CardsContainer>

      <ContactCard animate={loading}>
          <ContactHeader animate={loading === true}>
            <ContactFormText variant='button'>Contact Form</ContactFormText>
          </ContactHeader>
          <ContactFormContainer animate={loading === true}>
            <StyledTextField
              size='small'
              required
              label="Name"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <StyledTextField
              size='small'
              required
              label="Email"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <StyledTextField
              size='small'
              required
              label="Phone Number"
              variant="standard"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <StyledMuiFormControl fullWidth size='small'>
              <InputLabel>Preferred Method Of Contact</InputLabel>
              <StyledDropdowns
                label="Preferred Method of Contact"
                value={preferredMethodOfContact}
                onChange={(e) => setPreferredMethodOfContact(e.target.value)}
                variant="standard"
                size='small'
                >
                {contactMethods.map((method) => {
                  return <MenuItem value={method}>{method}</MenuItem>
                })
              }
              </StyledDropdowns>
            </StyledMuiFormControl>
            <StyledMuiFormControl fullWidth size='small'>
            <InputLabel>Designation</InputLabel>
              <StyledDropdowns
                label="Designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                variant="standard"
                size='small'
              >
                {
                  designationList.map((designation) => {
                    return <MenuItem value={designation}>{designation}</MenuItem>
                  })
                }
              </StyledDropdowns>
            </StyledMuiFormControl>

            <StyledTextField
              size='small'
              required
              multiline
              label="Message"
              variant="standard"
              value={howCanWeHelpYou}
              // rows={4}
              onChange={(e) => setHowCanWeHelpYou(e.target.value)}
            />
          </ContactFormContainer>
          <SubmitContainer>
            <SubmitButton 
              // disabled={loading} 
              variant="contained" 
              onClick={handleSubmit}
              animate={loading === true}
            >
              Send
            </SubmitButton>
          </SubmitContainer>
        </ContactCard>

        <BackgroundCard>
          <BackgroundCardHeader />
          <BackgroundImageContainer>
            <GoogleMapReact
              bootstrapURLKeys={{ key: String(apiKey) }}
              
              defaultCenter={ window.innerWidth > 600 ? mapCenter : medPlusLatLong }
              // zoom={14}
              defaultZoom={15}
              options={{
                disableDefaultUI: true,
                keyboardShortcuts: false,
                styles: mapStyles,
              }}
              onClick={handleMarkerClick}
            >
              <MyMarker
                lat={medPlusLatLong.lat}
                lng={medPlusLatLong.lng}
                text="MedPlus LLC"
              />
            </GoogleMapReact>
          </BackgroundImageContainer>
          <BackgroundCardFooter >
            <BackgroundCardFootText variant='body2'>
              866.995.1842 Toll Free
            </BackgroundCardFootText>
            <BackgroundCardFootText variant='body2'>
              713.995.1842 Local
            </BackgroundCardFootText>
            <BackgroundCardFootText variant='body2'>
              713.995.0692 Fax
            </BackgroundCardFootText>
            <BackgroundCardFootText variant='body2'>
              info@medplusllc.com
              </BackgroundCardFootText>
          </BackgroundCardFooter>

        </BackgroundCard>

        

      </CardsContainer>
      <Footer />
    </ContactRoot>
  )
}