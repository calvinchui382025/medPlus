import { Root } from '../../styled-components'
import { ContentContainer } from '../../styled-components'
import { styled, Grid, Divider, Card, FormControl, MenuItem, CardContent, InputLabel, FormGroup, FormControlLabel, Checkbox, Button, Typography, InputBase, CardActions, TextField, Box } from '@mui/material'
import { Contact } from '../Contact'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';
import Footer from '../../components/Footer';
import { animateProps, contactFadeIn, contactFadeOut, fadeIn, fadeOut, moveDownAnimation, moveLeftAnimation, moveRightAnimation, niceBoxShadow } from '../../utils/constants'

//TODO: make working with mobile
//TODO: add error case so submit can only be pressed when all fields are filled out

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

const BackgroundCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: niceBoxShadow,
  borderRadius: '16px',
  backgroundColor: '#1d1c1d',
  width: '100%',
  animation: `${moveRightAnimation} 2s`,
  '@media (max-width: 600px)': {
    display: 'none'
  },
})

const BackgroundCardHeader = styled('div')({
width: '100%',
minHeight: '48px',
display: 'flex',
})

const CustomTextField = styled(TextField)({
  width: '90%',
  height: '48px',
  '& .MuiFormLabel-root': {
    fontSize: '12px !important',
    fontWeight: '700',
  },
})

const StyledDropdowns = styled(Select)({
  height: '48px',
  fontSize: '12px',
  fontWeight: '700',
  width: '90%',
})

const SelectBoxPractice = styled('div')({
  paddingTop: "5px",
  '& .MuiFormControlLabel-label': {
    fontSize: '12px',
    fontWeight: '700',
    left: '-14px',
    top: '20px',
    color: 'rgb(128, 128, 128)',
  }
})

const StyledHeardFromForm = styled('div')({
  marginTop: '15px',
  fontSize: '12px',
  fontWeight: '700',
  '& .MuiFormControlLabel-label': {
    fontSize: '12px',
    fontWeight: '700',
    left: '-14px',
    top: '20px',
    color: 'rgb(128, 128, 128)',
  }
})

const StyledInputLabel = styled(InputLabel)({
  fontSize: '12px',
  fontWeight: '700',
})

const StyledFormControlLabel = styled(FormControlLabel)({
  fontSize: '12px',
  fontWeight: '700',
  paddingLeft: '10px',
})

const StyledMuiFormControl = styled(FormControl)({
  width: '90%',
    '& .MuiFormLabel-root': {
      fontSize: '12px',
      fontWeight: '700',
      left: '-14px',
      top: '20px',
    },
    '& .MuiFormControlLabel-label': {
      fontSize: '12px',
      fontWeight: '700',
      left: '-14px',
      top: '20px',
      color: 'rgb(128, 128, 128)',
    }
})

const QuoteCard = styled(Card)<animateProps>(({animate}) => ({
  width: '100%',
  maxWidth: '1250px',
  
  display: 'flex',
  flexDirection: 'row',
  padding: '1rem',
  borderRadius: '16px',
  boxShadow: niceBoxShadow,
  position: 'absolute',
  top: '85px',
  zIndex: 2,
  marginBottom: '12px',

  height: animate ? '500px' : '740px',
  animation: `${moveDownAnimation} 2s`,
  transition: 'all 1s ease-in-out',

  '@media (max-width: 600px)': {
    position: 'inherit',
    height: animate ? '500px' : '1500px',
  },
})
)

const StyledFormGroup = styled(FormGroup)({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "16px",
  "@media (max-width: 768px)": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
})

const StyledButtonDiv = styled('div')({
  display: 'flex',
  flexDirection: "row",
  justifyContent: "center",
  marginTop: 50,
})

const SubtitleText = styled(Typography)({
  color: "rgb(35, 116, 176)"
})

const GroupedCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
}) 

const ContactInformation = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
})

const PotentialInsuranceChoice = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
})

const InsuredInformation = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
})

const PracticeInformation = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
})

const CurrentCoverageInformation = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
})


export const Quote = () => {
  const stateList = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
  const designationList = ['C.C.P.','CRNA','D.C.','D.D.S','D.M.D','D.O.','D.P.M.','M.D.','Medical Director','MSN','NP','NPT','O.D.','P.A.','PhD','RN']
  const [state, setState] = React.useState<any>('');
  const [certified, setCertified] = React.useState<any>('');
  const [checked, setChecked] = React.useState("");
  const [checkedPractice, setCheckedPractice] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [addressLine1, setAddressLine1] = React.useState('');
  const [addressLine2, setAddressLine2] = React.useState('');
  const [zipCode, setZipCode] = React.useState('');
  const [insuredFirstName, setInsuredFirstName] = React.useState('');
  const [insuredLastName, setInsuredLastName] = React.useState('');
  const [designation, setDesignation] = React.useState<any>('');
  const [practiceState, setPracticeState] = React.useState<any>('');
  const [practiceCounty, setPracticeCounty] = React.useState('');
  const [numberInGroup, setNumberInGroup] = React.useState('');
  const [specialty, setSpecialty] = React.useState('');
  const [currentCarrier, setCurrentCarrier] = React.useState('');
  const [currentPolicyNumber, setCurrentPolicyNumber] = React.useState('');
  const [policyNumberExpirationDate, setPolicyNumberExpirationDate] = React.useState('');
  const [claimsInLast10Years, setClaimsInLast10Years] = React.useState('');
  const [heardFromOther, setHeardFromOther] = React.useState('');
  const [otherSpecify, setOtherSpecify] = React.useState('');
  const [checkedCoverageInfo, setCheckedCoverageInfo] = React.useState('');
  const [checkedHear, setCheckedHear] = React.useState('');
  const [limits, setLimits] = React.useState<any>('');

  const handleCheckedHear = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedHear(event.target.value);
  }

  const handleCheckedCoverageInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedCoverageInfo(event.target.value);
  }

  const handleCheckedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
  }

  const handleCheckedPracticeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedPractice(event.target.value);
  }

  const formData = {
    "First Name": firstName,
    "Last Name": lastName,
    "Email": email,
    "Phone Number": phoneNumber,
    "Address Line 1": addressLine1,
    "Address Line 2": addressLine2,
    "State": state,
    "Zip Code": zipCode,
    "Insurance Product": checked,
    "Insurance if other": otherSpecify,
    "Insured First Name": insuredFirstName,
    "Insured Last Name": insuredLastName,
    "Designation": designation,
    "Practice State": practiceState,
    "Practice County": practiceCounty,
    "Individual or Group": checkedPractice,
    "Number in Group": numberInGroup,
    "Specialty": specialty,
    "Board Certified": certified,
    "Coverage Information": checkedCoverageInfo,
    "Current Carrier": currentCarrier,
    "Current Policy Number": currentPolicyNumber,
    "Policy Number Expiration Date": policyNumberExpirationDate,
    "Claims in Last 10 Years": claimsInLast10Years,
    "Heard From": checkedHear,
    "Heard From Other": heardFromOther,
    "Limits": limits,
    }

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <ContactRoot>
      <CardsContainer>
        <QuoteCard>
          <StyledFormGroup>
            <GroupedCard>
            <ContactInformation>
              <SubtitleText variant="h6">Contact Information</SubtitleText>
              <CustomTextField variant="standard" label="First Name" name="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)}></CustomTextField>
              <CustomTextField variant="standard" label="Last Name" name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)}></CustomTextField>
              <CustomTextField variant="standard" label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></CustomTextField>
              <CustomTextField variant="standard" label="Phone Number" name="phonenumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></CustomTextField>
              <CustomTextField variant="standard" label="Address Line 1" name="addressline1" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)}></CustomTextField>
              <CustomTextField variant="standard" label="Address Line 2" name="addressline2" value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)}></CustomTextField>
              <StyledMuiFormControl>
                <InputLabel>State</InputLabel>
                  <StyledDropdowns
                      id="demo-select-small"
                      value={state}
                      label="State"
                      variant="standard"
                      size="small"
                      onChange={(e) => setState(e.target.value)}
                      sx={{padding: "5px", width: "250px",}}
                    >
                      {
                        stateList.map((state) => {
                          return <MenuItem value={state}>{state}</MenuItem>
                        })
                      }
                    </StyledDropdowns>
              </StyledMuiFormControl>
              <CustomTextField variant="standard" label="Zip Code" name="zipcode" value={zipCode} onChange={(e) => setZipCode(e.target.value)}></CustomTextField>
            </ContactInformation>
            <InsuredInformation>
                <SubtitleText variant="h6">Insured Information</SubtitleText>
                <CustomTextField variant="standard" label="First Name" value={insuredFirstName} onChange={(e) => setInsuredFirstName(e.target.value)}></CustomTextField>
                <CustomTextField variant="standard" label="Last Name" value={insuredLastName} onChange={(e) => setInsuredLastName(e.target.value)}></CustomTextField>
                <StyledMuiFormControl>
                  <InputLabel>Professional Designation</InputLabel>
                    <StyledDropdowns
                        value={designation}
                        label="Designation"
                        variant="standard"
                        size="small"
                        onChange={(e) => setDesignation(e.target.value)}
                        sx={{padding: "5px", width: "250px",}}
                      >
                        {
                      designationList.map((designation) => {
                        return <MenuItem value={designation}>{designation}</MenuItem>
                        })
                      }
                      </StyledDropdowns>
                </StyledMuiFormControl>
              </InsuredInformation>
            </GroupedCard>
            <GroupedCard>
              <PotentialInsuranceChoice>
                <SubtitleText variant="h6">What Insurance Products Are You Interested In?</SubtitleText>
                <StyledMuiFormControl>
                  <StyledFormControlLabel
                    control={
                      <Checkbox
                        checked={checked === "Professional Liability"}
                        onChange={handleCheckedChange}
                        value="Professional Liability"
                      />
                    }
                    label="Professional Liability"
                  />
                  <StyledFormControlLabel
                    control={
                      <Checkbox
                        checked={checked === "Commercial"}
                        onChange={handleCheckedChange}
                        value="Commercial"
                      />
                    }
                    label="Commercial"
                  />
                  <StyledFormControlLabel
                    control={
                      <Checkbox
                        checked={checked === "Personal"}
                        onChange={handleCheckedChange}
                        value="Personal"
                      />
                    }
                    label="Personal"
                  />
                  <StyledFormControlLabel
                    control={
                      <Checkbox
                        checked={checked === "Other"}
                        onChange={handleCheckedChange}
                        value="Other"
                      />
                    }
                    label="Other"
                  />
                </StyledMuiFormControl>
                <CustomTextField variant="standard" label="Please specify if other" disabled={checked === "Professional Liability" || checked === "Commercial" || checked === "Personal" || checked === null} name="otherSpecify" value={otherSpecify} onChange={(e) => setOtherSpecify(e.target.value)}></CustomTextField>
              </PotentialInsuranceChoice>
              <PracticeInformation>
                <SubtitleText variant="h6">Practice Information</SubtitleText>
                <StyledMuiFormControl>
                  <InputLabel>Practice State</InputLabel>
                    <StyledDropdowns
                        id="demo-select-small"
                        value={practiceState}
                        label="State"
                        variant="standard"
                        size="small"
                        onChange={(e) => setPracticeState(e.target.value)}
                        sx={{padding: "5px", width: "250px",}}
                      >
                        {
                          stateList.map((state) => {
                            return <MenuItem value={state}>{state}</MenuItem>
                          })
                        }
                      </StyledDropdowns>
                </StyledMuiFormControl>
                <CustomTextField variant="standard" label="Practice County" value={practiceCounty} onChange={(e) => setPracticeCounty(e.target.value)}></CustomTextField>
                <SelectBoxPractice>
                  <StyledFormControlLabel
                    control={
                      <Checkbox
                        checked={checkedPractice === "Individual"}
                        onChange={handleCheckedPracticeChange}
                        value="Individual"
                      />
                    }
                    label="Individual"
                  />
                  <StyledFormControlLabel
                    control={
                      <Checkbox
                        checked={checkedPractice === "Group"}
                        onChange={handleCheckedPracticeChange}
                        value="Group"
                      />
                    }
                    label="Group"
                  />
                </SelectBoxPractice>
                <CustomTextField variant="standard" label="How many in group?" disabled={checkedPractice === "Individual" || checkedPractice === null}  value={numberInGroup} onChange={(e) => setNumberInGroup(e.target.value)}></CustomTextField>
                <CustomTextField variant="standard" label="Specialty" value={specialty} onChange={(e) => setSpecialty(e.target.value)}></CustomTextField>
                <StyledMuiFormControl>
                <InputLabel>Board Certified</InputLabel>
                  <StyledDropdowns
                      value={certified}
                      label="Board Certified"
                      variant="standard"
                      size="small"
                      onChange={(e) => setCertified(e.target.value)}
                      sx={{padding: "5px", width: "250px",}}
                    >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                    <MenuItem value="Pending">Pending</MenuItem>
                  </StyledDropdowns>
                </StyledMuiFormControl>
              </PracticeInformation>
            </GroupedCard>
            <CurrentCoverageInformation>
              <SubtitleText variant="h6">Current Coverage Information</SubtitleText>
              <StyledMuiFormControl>
                <StyledFormControlLabel
                    control={
                      <Checkbox
                        checked={checkedCoverageInfo === "Claims Made"}
                        onChange={handleCheckedCoverageInfo}
                        value="Claims Made"
                      />
                    }
                    label="Claims Made"
                  />
                  <StyledFormControlLabel
                    control={
                      <Checkbox
                        checked={checkedCoverageInfo === "Occurence"}
                        onChange={handleCheckedCoverageInfo}
                        value="Occurence"
                      />
                    }
                    label="Occurence"
                  />
                  <StyledFormControlLabel
                    control={
                      <Checkbox
                        checked={checkedCoverageInfo === "New To Practice"}
                        onChange={handleCheckedCoverageInfo}
                        value="New To Practice"
                      />
                    }
                    label="New To Practice"
                  />
              </StyledMuiFormControl>
              <StyledMuiFormControl
              disabled={checkedCoverageInfo === "Occurence" || checkedCoverageInfo === "New To Practice" || checkedCoverageInfo === null}
              >
                <InputLabel>Limits</InputLabel>
                  <StyledDropdowns
                      value={limits}
                      label="Limits"
                      variant="standard"
                      size="small"
                      onChange={(e) => setLimits(e.target.value)}
                      sx={{padding: "5px", width: "250px",}}
                    >
                    <MenuItem value="200/600">200/600</MenuItem>
                    <MenuItem value="250/750">250/750</MenuItem>
                    <MenuItem value="500/1 Mil">500/1 Mil</MenuItem>
                    <MenuItem value="1 Mil/3 Mil">1 Mil/3 Mil</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </StyledDropdowns>
              </StyledMuiFormControl>
              <CustomTextField variant="standard" label="Current Carrier" value={currentCarrier} onChange={(e) => setCurrentCarrier(e.target.value)}></CustomTextField>
              <CustomTextField variant="standard" label="Current Policy Number" value={currentPolicyNumber} onChange={(e) => setCurrentPolicyNumber(e.target.value)}></CustomTextField>
              <CustomTextField variant="standard" label="Current Policy Expiration Date" value={policyNumberExpirationDate} onChange={(e) => setPolicyNumberExpirationDate(e.target.value)}></CustomTextField>
              <CustomTextField variant="standard" label="How many claims in the last 10 years" value={claimsInLast10Years} onChange={(e) => setClaimsInLast10Years(e.target.value)}></CustomTextField>
                <StyledHeardFromForm>
                  <StyledInputLabel id="demo-select-small">How did you hear about us?</StyledInputLabel>
                    <StyledFormControlLabel
                      control={
                        <Checkbox
                          checked={checkedHear === "Agent"}
                          onChange={handleCheckedHear}
                          value="Agent"
                        />
                      }
                      label="Agent"
                    />
                    <StyledFormControlLabel
                      control={
                        <Checkbox
                          checked={checkedHear === "Mailer"}
                          onChange={handleCheckedHear}
                          value="Mailer"
                        />
                      }
                      label="Mailer"
                    />
                    <StyledFormControlLabel
                      control={
                        <Checkbox
                          checked={checkedHear === "Email"}
                          onChange={handleCheckedHear}
                          value="Email"
                        />
                      }
                      label="Email"
                    />
                    <StyledFormControlLabel
                      control={
                        <Checkbox
                          checked={checkedHear === "Referral"}
                          onChange={handleCheckedHear}
                          value="Referral"
                        />
                      }
                      label="Referral"
                    />
                    <StyledFormControlLabel
                      control={
                        <Checkbox
                          checked={checkedHear === "Web Search"}
                          onChange={handleCheckedHear}
                          value="Web Search"
                        />
                      }
                      label="Web Search"
                    />
                    <StyledFormControlLabel
                      control={
                        <Checkbox
                          checked={checkedHear === "Other"}
                          onChange={handleCheckedHear}
                          value="Other"
                        />
                      }
                      label="Other"
                    />
                </StyledHeardFromForm>
                <CustomTextField variant="standard" label="If other, please specify" disabled={checkedHear === "Agent" || checkedHear === "Mailer" || checkedHear === "Email" || checkedHear === "Referral" || checkedHear === "Web Search" || checkedHear === null} value={heardFromOther} onChange={(e) => setHeardFromOther(e.target.value)}></CustomTextField>
              <StyledButtonDiv>
                <Button variant="contained" color="primary" type="submit" onClick={handleSubmit} sx={{width: 200}}>Submit for quote</Button>
              </StyledButtonDiv>
            </CurrentCoverageInformation>
          </StyledFormGroup>
        </QuoteCard>

        <BackgroundCard>
          <BackgroundCardHeader />
        </BackgroundCard>
      </CardsContainer>
      <Footer />
    </ContactRoot>
  )
}