import { Root } from '../../styled-components'
import { ContentContainer } from '../../styled-components'
import { styled, Divider, Card, MenuItem, CardContent, InputLabel, FormGroup, FormControlLabel, Checkbox, Button, Typography, InputBase, CardActions, TextField, Box } from '@mui/material'
import { Contact } from '../Contact'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';

const MediaBanner = styled('div')({

})

const CustomTextField = styled(TextField)({
  padding: "5px",
  width: "80%",
})

const SelectBox = styled('div')({
  marginLeft: "5px",
  marginBottom: "5px",
})

const MediaText = styled('div')({
  position: "absolute",
  marginTop: 120,
  maxWidth: 800,
  display: 'flex',
  textAlign: 'right',
  color: 'black',
})

const QuoteCard = styled(Card)({
  maxWidth: 800,
  position: 'absolute',
  marginTop: 250,
  boxShadow: "-10px 0 8px -8px grey, 10px 0 8px -8px grey",
})

const StyledFormGroup = styled(FormGroup)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

const ContactInformation = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

const SubtitleText = styled(Typography)({
  color: "rgb(35, 116, 176)"
})

const PotentialInsuranceChoice = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

const InsuredInformation = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

const PracticeInformation = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

const CurrentCoverageInformation = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})


export const Quote = () => {
  const stateList = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
  const designationList = ['C.C.P.','CRNA','D.C.','D.D.S','D.M.D','D.O.','D.P.M.','M.D.','Medical Director','MSN','NP','NPT','O.D.','P.A.','PhD','RN']
  const [insured, setInsured] = React.useState('');
  const [state, setState] = React.useState('Texas');
  const [certified, setCertified] = React.useState('');
  const [checked, setChecked] = React.useState("");
  const [checkedPractice, setCheckedPractice] = React.useState("Individual");

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

  return (
    <Root>
      <ContentContainer>
        <MediaBanner>
          <img 
          src={require("../../images/quotebanner.jpg")}
          style={{height: "80%", width: "80"}}
          />
        </MediaBanner>
        <MediaText>
          <Typography variant="h3"><strong>Request a quote</strong></Typography>
        </MediaText>
        <QuoteCard>
          <StyledFormGroup>
            <ContactInformation>
              <SubtitleText variant="h5">Contact Information</SubtitleText>
              <CustomTextField label="First Name"></CustomTextField>
              <CustomTextField label="First Name"></CustomTextField>
              <CustomTextField label="Last Name"></CustomTextField>
              <CustomTextField label="Email"></CustomTextField>
              <CustomTextField label="Phone Number"></CustomTextField>
              <CustomTextField label="Address Line 1"></CustomTextField>
              <CustomTextField label="Address Line 2"></CustomTextField>
              <SelectBox>
                <InputLabel id="demo-select-small">State</InputLabel>
                  <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={state}
                      label="Practice State"
                      onChange={handleStateChange}
                      sx={{padding: "5px", width: "250px",}}
                    >
                      <MenuItem value="">
                        <em>Texas</em>
                      </MenuItem>
                      {
                        stateList.map((state) => {
                          return <MenuItem value={state}>{state}</MenuItem>
                        })
                      }
                    </Select>
              </SelectBox>
              <CustomTextField label="Zip Code"></CustomTextField>
            </ContactInformation>
            <Divider />
            <PotentialInsuranceChoice>
              <SubtitleText variant="h5">What Insurance Products Are You Interested In?</SubtitleText>
              <SelectBox>
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
              </SelectBox>
              <SubtitleText variant="h6">If other, please specify below</SubtitleText>
              <CustomTextField></CustomTextField>
            </PotentialInsuranceChoice>
            <Divider />
            <InsuredInformation>
              <SubtitleText variant="h5">Insured Information</SubtitleText>
              <CustomTextField label="First Name"></CustomTextField>
              <CustomTextField label="Last Name"></CustomTextField>
              <SelectBox>
                <InputLabel id="demo-select-small">Professional Designation</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={insured}
                    label="Insured"
                    onChange={handleInsuredChange}
                    sx={{padding: "5px", width: "250px",}}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {
                    designationList.map((designation) => {
                      return <MenuItem value={designation}>{designation}</MenuItem>
                      })
                    }
                  </Select>
              </SelectBox>
            </InsuredInformation>
            <Divider />
            <PracticeInformation>
              <SubtitleText variant="h5">Practice Information</SubtitleText>
              <SelectBox>
                <InputLabel id="demo-select-small">Practice State</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={state}
                    label="Practice State"
                    onChange={handleStateChange}
                    sx={{padding: "5px", width: "250px",}}
                  >
                    <MenuItem value="">
                      <em>Texas</em>
                    </MenuItem>
                    {
                      stateList.map((state) => {
                        return <MenuItem value={state}>{state}</MenuItem>
                      })
                    }
                  </Select>
              </SelectBox>
              <CustomTextField label="Practice County"></CustomTextField>
              <SelectBox>
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
              </SelectBox>
              <CustomTextField label="How many in group?" disabled={checkedPractice === "Individual"}></CustomTextField>
              <CustomTextField label="Specialty"></CustomTextField>
              <SelectBox>
                <InputLabel id="demo-select-small">Board Certified</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={certified}
                    label="Practice State"
                    onChange={handleCertifiedChange}
                    sx={{padding: "5px", width: "150px",}}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Yes</MenuItem>
                    <MenuItem value={20}>No</MenuItem>
                    <MenuItem value={30}>Pending</MenuItem>
                  </Select>
              </SelectBox>
            </PracticeInformation>
            <Divider />
            <CurrentCoverageInformation>
              <SubtitleText variant="h5">Current Coverage Information</SubtitleText>
              <SelectBox>
                <FormControlLabel control={<Checkbox />} label="Claims Made" />
                <FormControlLabel control={<Checkbox />} label="Occurence" />
                <FormControlLabel control={<Checkbox />} label="New To Practice" />
              </SelectBox>
              <CustomTextField label="Current Carrier"></CustomTextField>
              <CustomTextField label="Current Policy Number"></CustomTextField>
              <CustomTextField label="Current Policy Expiration Date"></CustomTextField>
              <CustomTextField label="How many claims in the last 10 years"></CustomTextField>
                <SelectBox>
                  <InputLabel id="demo-select-small">How did you hear about us?</InputLabel>
                  <FormControlLabel control={<Checkbox />} label="Agent" />
                  <FormControlLabel control={<Checkbox />} label="Mailer" />
                  <FormControlLabel control={<Checkbox />} label="Email" />
                  <FormControlLabel control={<Checkbox />} label="Referral" />
                  <FormControlLabel control={<Checkbox />} label="Web Sesarch" />
                  <FormControlLabel control={<Checkbox />} label="Other" />
                </SelectBox>
                <CustomTextField label="If other, please specify"></CustomTextField>
            </CurrentCoverageInformation>
            <div style={{display: 'flex', flexDirection: "row", justifyContent: "center", marginBottom: 10}}>
              <Button variant="contained" color="primary" sx={{width: 200}}>Submit for quote</Button>
            </div>
          </StyledFormGroup>
        </QuoteCard>
      </ContentContainer>
    </Root>
  )
}
