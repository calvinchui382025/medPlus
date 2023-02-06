import { keyframes, List, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useEffect, useRef, useState } from 'react'
import  {useInView}  from 'react-intersection-observer';
import { Image } from 'mui-image'
//======================================================
const commercialList = [
  'Commercial property and general liability',
  "Business owner's policies",
  'We offer Premium financing through AFCO.',
  'Commercial auto',
  'Umbrella excess coverage',
  "Worker's compensation",
  'Group health',
  'Life and dental',
  'Accounts receivable protection',
  'Insurance products to fund buy/sell agreements',
  'Key man insurance and executive bonus',
  'Directors and officers liability',
  'Managed care errors and omissions (including medical director)',
  'Self-insured/captive programs',
  'Medicare/Medicaid defense coverage',
  'Medical director'
];
const personalList = [
  'Individual and family health (including health savings accounts)',
  'Group health',
  'Term and permanent life',
  'Premium financed life',
  'Long-term care',
  'Short-term and long-term disability',
  'Disability for highly compensated individuals'
];
const professionalList1 = [
  'Occurrence or claims-made coverage',
  'Prior acts (nose coverage) and extended reporting period endorsements (tail coverage)',
  'We offer Premium financing through AFCO.',
  'Defense costs outside of policy limits',
  'Defendant\'s reimbursement',
  'Defense for state regulatory investigations',
  'Peer review and utilization review',
  'Individual and group coverage policies',
  'Protection for legal entities, ancillary medical professionals, employees, and volunteers',
  'Locum tenens (substitute physician\'s coverage)',
  'Medical director',
  'Staffing company coverage'
];
const professionalList2 = [
  'Long-term care (for-profit and non-profit)',
  'Large and small hospitals',
  'Home health care and managed care',
  'Urban and rural clinics',
  'Ambulatory surgery centers',
  'Urgent care',
  'Dialysis centers',
  'MRI imaging centers'
];
//======================================================
const moveRightAnimation = keyframes`
  0%    {
    opacity: 0; 
    transform: translateX(-40px);
  }
  100%  {
    opacity: 1; 
    transform: translateX(0px);
  }
`

const moveLeftAnimation = keyframes`
  0%    {
    opacity: 0;
    transform: translateX(40px);
  }
  100%  {
    opacity: 1;
    transform: translateX(0px);
  }
`
//======================================================
const StyledSection = styled('section')({
  // height: 'calc(100vh - 64px)',
})
interface animateProps {
  animate?: boolean
}
const TextWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  margin: '24px',
})
const ListRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '24px',
})

const CommercialImage = styled('img')<animateProps>(({animate}) => ({
  animation: animate ? `${moveRightAnimation} 2s` : 'none',
  width: '100%',
  })
)
const CommercialTopText = styled(Typography)<animateProps>(({animate}) => ({
    animation: animate ? `${moveRightAnimation} 2s` : 'none',
  })
)
const CommercialList = styled(List)<animateProps>(({animate}) => ({
    animation: animate ? `${moveRightAnimation} 2s` : 'none',
  })
)
const COmmercialBottomText = styled(Typography)<animateProps>(({animate}) => ({
    animation: animate ? `${moveRightAnimation} 2s` : 'none',
  })
)
const PersonalImage = styled('img')<animateProps>(({animate}) => ({
    animation: animate ? `${moveLeftAnimation} 2s` : 'none',
    width: '100%',
  })
)
const PersonalTopText = styled(Typography)<animateProps>(({animate}) => ({
    animation: animate ? `${moveLeftAnimation} 2s` : 'none',
  })
)
const PersonalList = styled(List)<animateProps>(({animate}) => ({
    animation: animate ? `${moveLeftAnimation} 2s` : 'none',
  })
)

const ProfessionalImage = styled('img')<animateProps>(({animate}) => ({
    animation: animate ? `${moveRightAnimation} 2s` : 'none',
    width: '100%',
  })
)

const ProfessionalTopText = styled(Typography)<animateProps>(({animate}) => ({
    animation: animate ? `${moveRightAnimation} 2s` : 'none',
  })
)
const ProfessionalList1 = styled(List)<animateProps>(({animate}) => ({
    animation: animate ? `${moveRightAnimation} 2s` : 'none',
  })
)
const ProfessionalMiddleText = styled(Typography)<animateProps>(({animate}) => ({
    animation: animate ? `${moveRightAnimation} 2s` : 'none',
  })
)

const ProfessionalList2 = styled(List)<animateProps>(({animate}) => ({
    animation: animate ? `${moveRightAnimation} 2s` : 'none',
  })
)
//======================================================
export const Products = () => {
  const { ref: commercialImageRef, inView: commercialImageVisable } = useInView();
  const { ref: commercialTopTextRef, inView: commercialTopTextVisible } = useInView();
  const { ref: commercialListRef, inView: commercialListVisible } = useInView();
  const { ref: commercialBottomTextRef, inView: commercialBottomTextVisible } = useInView();

  const { ref: personalImageRef, inView: personalImageVisible } = useInView();
  const { ref: personalTopTextRef, inView: personalTopTextVisible } = useInView();
  const { ref: personalListRef, inView: personalListVisible } = useInView();

  const { ref: professionalImageRef, inView: professionalImageVisible } = useInView();
  const { ref: professionalTopTextRef, inView: professionalTopTextVisible } = useInView();
  const { ref: professionalList1Ref, inView: professionalList1Visible } = useInView();
  const { ref: professionalMiddleTextRef, inView: professionalMiddleTextVisible } = useInView();
  const { ref: professionalList2Ref, inView: professionalList2Visible } = useInView();

  return (
    <div>
      <StyledSection>
        <CommercialImage
        // @ts-ignore
          ref={commercialImageRef} 
          src='/images/commercial_products.jpg'
          animate={commercialImageVisable}
        />
        <TextWrapper>
          <CommercialTopText variant='body1' ref={commercialTopTextRef} animate={commercialTopTextVisible}>
            Our experienced staff is committed to delivering commercial products tailored to meet your professional needs. 
            We are ready to work with you to develop a program that makes sense for you and your employees. 
            Our wide variety of services and lines of coverage include, but are not limited to, the following:
          </CommercialTopText>
          <ListRow>

            <CommercialList ref={commercialListRef} animate={commercialListVisible} dense>
              {commercialList.map((item, index) => {
                return (
                  <ListItem key={index}>
                    <Typography variant='body2'>
                      {item}
                    </Typography>
                  </ListItem>
                )
              })}
            </CommercialList>
            {/* <Image 
              src='/images/pexels-karolina-grabowska-4386464.jpg'
              shift='left'
              duration={2000}
              distance='40px'
            /> */}
          </ListRow>
        </TextWrapper>
      </StyledSection>

      <StyledSection>
        <PersonalImage 
          ref={personalImageRef}
          src='/images/personal_products.jpg' 
          animate={personalImageVisible}
        />
        <TextWrapper>
          <PersonalTopText variant='body1' ref={personalTopTextRef} animate={personalTopTextVisible}>
            Life and health insurance have many variables and decisions. 
            How much coverage is enough and what type of policy is best for you and your family are just two of the questions that might arise. 
            After determining your personal product needs, our agency will provide you with the most comprehensive plan with the greatest value for you and your family. 
            We specialize in a wide variety of services and lines of coverage that include, but are not limited to, the following:
          </PersonalTopText>
          <ListRow>
            <div></div>
            <PersonalList ref={personalListRef} animate={personalListVisible} dense>
              {personalList.map((item, index) => {
                return (
                  <ListItem key={index} style={{display: 'flex', justifyContent: 'flex-end', textAlign: 'right'}} >
                    <Typography variant='body2'>
                      {item}
                    </Typography>
                  </ListItem>
                )
              })}
            </PersonalList>
          </ListRow>
        </TextWrapper>
      </StyledSection>

      <StyledSection>
        <ProfessionalImage
          ref={professionalImageRef}
          src='/images/professional_liability.jpg'
          animate={professionalImageVisible}
        />
        <TextWrapper>
          <ProfessionalTopText variant='body1' ref={professionalTopTextRef} animate={professionalTopTextVisible}>
          The medical profession is more challenged today by medical malpractice than it has been at any other point in history. You'd like to think it will never happen to you, but unfortunately, it can. MedPLUS offers several liability coverage options that can protect you and your practice from the devastating effects of a lawsuit. Depending on the insurance carrier, professional liability insurance coverage includes the following:
          </ProfessionalTopText>
          <ListRow>
            <ProfessionalList1 ref={professionalList1Ref} animate={professionalList1Visible} dense>
              {professionalList1.map((item, index) => {
                return (
                  <ListItem key={index}>
                    <Typography variant='body2'>
                      {item}
                    </Typography>
                  </ListItem>
                )
              })}
            </ProfessionalList1>
          </ListRow>
          <ProfessionalMiddleText variant='body1' ref={professionalMiddleTextRef} animate={professionalMiddleTextVisible}>
          Professional liability solutions are available for physicians, dentists, chiropractors, mid-level providers, and allied staff. In addition, MedPLUS can find the best coverage to protect the following facilities:
          </ProfessionalMiddleText>
          <ListRow>
            <ProfessionalList2 ref={professionalList2Ref} animate={professionalList2Visible} dense>
              {professionalList2.map((item, index) => {
                return (
                  <ListItem key={index}>
                    <Typography variant='body2'>
                      {item}
                    </Typography>
                  </ListItem>
                )
              })}
            </ProfessionalList2>
          </ListRow>
        </TextWrapper>
      </StyledSection>
    </div>
  )
}