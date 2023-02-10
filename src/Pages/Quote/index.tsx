import { Root } from '../../styled-components'
import { ContentContainer } from '../../styled-components'
import { styled, Grid, Divider, Card, FormControl, MenuItem, CardContent, InputLabel, FormGroup, FormControlLabel, Checkbox, Button, Typography, InputBase, CardActions, TextField, Box } from '@mui/material'
import { Contact } from '../Contact'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';
import Footer from '../../components/Footer';
import { animateProps, contactFadeIn, contactFadeOut, fadeIn, fadeOut, moveDownAnimation, moveLeftAnimation, moveRightAnimation, niceBoxShadow } from '../../utils/constants'

//TODO: Fix top padding/margin and make working with mobile

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
})

const SelectBox = styled('div')({
  marginLeft: "5px",
  marginBottom: "5px",
  fontSize: '12px',
  fontWeight: '700',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

const SelectBoxPractice = styled('div')({
  marginLeft: "5px",
  marginBottom: "5px",
  fontSize: '12px',
  fontWeight: '700',
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
    position: 'inherit'
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

const SubtitleText = styled(Typography)({
  color: "rgb(35, 116, 176)"
})

const GroupedCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
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
  const [insured, setInsured] = React.useState<any>('');
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
  const [insuranceProduct, setInsuranceProduct] = React.useState('');
  const [insuredFirstName, setInsuredFirstName] = React.useState('');
  const [insuredLastName, setInsuredLastName] = React.useState('');
  const [designation, setDesignation] = React.useState('');
  const [practiceState, setPracticeState] = React.useState('');
  const [practiceCounty, setPracticeCounty] = React.useState('');
  const [individualGroup, setIndividualGroup] = React.useState('');
  const [numberInGroup, setNumberInGroup] = React.useState('');
  const [specialty, setSpecialty] = React.useState('');
  const [boardCertified, setBoardCertified] = React.useState('');
  const [claimsMade, setClaimsMade] = React.useState('');
  const [occurence, setOccurence] = React.useState('');
  const [newToPractice, setNewToPractice] = React.useState('');
  const [currentCarrier, setCurrentCarrier] = React.useState('');
  const [currentPolicyNumber, setCurrentPolicyNumber] = React.useState('');
  const [policyNumberExpirationDate, setPolicyNumberExpirationDate] = React.useState('');
  const [claimsInLast10Years, setClaimsInLast10Years] = React.useState('');
  const [heardFrom, setHeardFrom] = React.useState('');
  const [heardFromOther, setHeardFromOther] = React.useState('');
  const [otherSpecify, setOtherSpecify] = React.useState('');
  const [checkedClaimsMade, setCheckedClaimsMade] = React.useState('');
  const [checkedOccurence, setCheckedOccurence] = React.useState('');
  const [checkedNewToPractice, setCheckedNewToPractice] = React.useState('');
  const [checkedHear, setCheckedHear] = React.useState('');

  const handleCheckedHear = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedHear(event.target.value);
  }

  const handleCheckedOccurence = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedOccurence(event.target.value);
  }

  const handleCheckedNewToPractice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedNewToPractice(event.target.value);
  }

  const handleCheckedClaimsMade = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedClaimsMade(event.target.value);
  }
  const handleInsuredChange = (event: SelectChangeEvent) => {
    setInsured(event.target.value);
  };

  const handleStateChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };

  const handleCertifiedChange = (event: SelectChangeEvent) => {
    setCertified(event.target.value);
  }

  const handleCheckedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
  }

  const handleCheckedPracticeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedPractice(event.target.value);
  }

  const formData = {firstName, lastName, email, phoneNumber, addressLine1, addressLine2, state, zipCode, insuranceProduct, insuredFirstName, insuredLastName, designation, practiceState, practiceCounty, individualGroup, numberInGroup, specialty, boardCertified, claimsMade, occurence, newToPractice, currentCarrier, currentPolicyNumber, policyNumberExpirationDate, claimsInLast10Years, heardFrom, heardFromOther}

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
                        value={insured}
                        label="Insured"
                        variant="standard"
                        size="small"
                        onChange={(e) => setInsured(e.target.value)}
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
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked === "Professional Liability"}
                        onChange={handleCheckedChange}
                        value="Professional Liability"
                      />
                    }
                    label="Professional Liability"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked === "Commercial"}
                        onChange={handleCheckedChange}
                        value="Commercial"
                      />
                    }
                    label="Commercial"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked === "Personal"}
                        onChange={handleCheckedChange}
                        value="Personal"
                      />
                    }
                    label="Personal"
                  />
                  <FormControlLabel
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
                <CustomTextField variant="standard" label="Please specify if other" disabled={checked === "Professional Liability" || checked === "Commercial" || checked === "Personal"} name="otherSpecify" value={otherSpecify} onChange={(e) => setOtherSpecify(e.target.value)}></CustomTextField>
              </PotentialInsuranceChoice>
              <PracticeInformation>
                <SubtitleText variant="h6">Practice Information</SubtitleText>
                <StyledMuiFormControl>
                  <InputLabel>Practice State</InputLabel>
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
                <CustomTextField variant="standard" label="Practice County" value={practiceCounty} onChange={(e) => setPracticeCounty(e.target.value)}></CustomTextField>
                <SelectBoxPractice>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedPractice === "Individual"}
                        onChange={handleCheckedPracticeChange}
                        value="Individual"
                      />
                    }
                    label="Individual"
                  />
                  <FormControlLabel
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
                <CustomTextField variant="standard" label="How many in group?" disabled={checkedPractice === "Individual"}  value={numberInGroup} onChange={(e) => setNumberInGroup(e.target.value)}></CustomTextField>
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
                <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedClaimsMade === "Claims Made"}
                        onChange={handleCheckedClaimsMade}
                        value="Claims Made"
                      />
                    }
                    label="Claims Made"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedOccurence === "Occurence"}
                        onChange={handleCheckedOccurence}
                        value="Occurence"
                      />
                    }
                    label="Occurence"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedNewToPractice === "New To Practice"}
                        onChange={handleCheckedNewToPractice}
                        value="New To Practice"
                      />
                    }
                    label="New To Practice"
                  />
              </StyledMuiFormControl>
              <CustomTextField variant="standard" label="Current Carrier" value={currentCarrier} onChange={(e) => setCurrentCarrier(e.target.value)}></CustomTextField>
              <CustomTextField variant="standard" label="Current Policy Number" value={currentPolicyNumber} onChange={(e) => setCurrentPolicyNumber(e.target.value)}></CustomTextField>
              <CustomTextField variant="standard" label="Current Policy Expiration Date" value={policyNumberExpirationDate} onChange={(e) => setPolicyNumberExpirationDate(e.target.value)}></CustomTextField>
              <CustomTextField variant="standard" label="How many claims in the last 10 years" value={claimsInLast10Years} onChange={(e) => setClaimsInLast10Years(e.target.value)}></CustomTextField>
                <StyledMuiFormControl>
                  {/* <InputLabel id="demo-select-small">How did you hear about us?</InputLabel> */}
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkedHear === "Agent"}
                          onChange={handleCheckedHear}
                          value="Agent"
                        />
                      }
                      label="Agent"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkedHear === "Mailer"}
                          onChange={handleCheckedHear}
                          value="Mailer"
                        />
                      }
                      label="Mailer"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkedHear === "Email"}
                          onChange={handleCheckedHear}
                          value="Email"
                        />
                      }
                      label="Email"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkedHear === "Referral"}
                          onChange={handleCheckedHear}
                          value="Referral"
                        />
                      }
                      label="Referral"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkedHear === "Web Search"}
                          onChange={handleCheckedHear}
                          value="Web Search"
                        />
                      }
                      label="Web Search"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkedHear === "Other"}
                          onChange={handleCheckedHear}
                          value="Other"
                        />
                      }
                      label="Other"
                    />
                </StyledMuiFormControl>
                <CustomTextField variant="standard" label="If other, please specify" disabled={checkedHear === "Agent" || checkedHear === "Mailer" || checkedHear === "Email" || checkedHear === "Referral" || checkedHear === "Web Search"} value={heardFromOther} onChange={(e) => setHeardFrom(e.target.value)}></CustomTextField>
              <div style={{display: 'flex', flexDirection: "row", justifyContent: "center", marginTop: 10}}>
                <Button variant="contained" color="primary" type="submit" onClick={handleSubmit} sx={{width: 200}}>Submit for quote</Button>
              </div>
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