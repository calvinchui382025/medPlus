import { Card, List, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react'
import { useInView } from 'react-intersection-observer';
import { Image } from 'mui-image'
import { animateProps, commercialList, moveLeftAnimation, moveRightAnimation, personalList, professionalList1, professionalList2 } from '../../utils/constants';
//======================================================
const StyledSection = styled('section')({
  // height: 'calc(100vh - 64px)',
})
const ListRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '24px',
})
//======================================================
const TextWrapper = styled(Card)<animateProps>(() => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
    margin: '12px 24px',
  })
)
const CommercialTextWrapper = styled(TextWrapper)<animateProps>(({animate}) => ({
    animation: animate ? `${moveRightAnimation} 2s` : 'none',
  })
)
const PersonalTextWrapper = styled(TextWrapper)<animateProps>(({animate}) => ({
    animation: animate ? `${moveLeftAnimation} 2s` : 'none',
  })
)
const ProfessionalTextWrapper = styled(TextWrapper)<animateProps>(({animate}) => ({
    animation: animate ? `${moveRightAnimation} 2s` : 'none',
  })
)
//======================================================
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
  const { ref: commercialTextWrapperRef, inView: commercialTextWrapperVisible } = useInView();

  const { ref: personalImageRef, inView: personalImageVisible } = useInView();
  const { ref: personalTextWrapperRef, inView: personalTextWrapperVisible } = useInView();

  const { ref: professionalImageRef, inView: professionalImageVisible } = useInView();
  const { ref: professionalTextWrapperRef, inView: professionalTextWrapperVisible } = useInView();

  return (
    <div>
      <StyledSection>
        <CommercialImage
        // @ts-ignore
          ref={commercialImageRef} 
          src='/images/commercial_products.jpg'
          animate={commercialImageVisable}
        />
        <CommercialTextWrapper ref={commercialTextWrapperRef} animate={commercialTextWrapperVisible}>
          <CommercialTopText variant='body1'>
            Our experienced staff is committed to delivering commercial products tailored to meet your professional needs. 
            We are ready to work with you to develop a program that makes sense for you and your employees. 
            Our wide variety of services and lines of coverage include, but are not limited to, the following:
          </CommercialTopText>
          <ListRow>

            <CommercialList dense>
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
        </CommercialTextWrapper>
      </StyledSection>

      <StyledSection>
        <PersonalImage 
          ref={personalImageRef}
          src='/images/personal_products.jpg' 
          animate={personalImageVisible}
        />
        <PersonalTextWrapper ref={personalTextWrapperRef} animate={personalTextWrapperVisible}>
          <PersonalTopText>
            Life and health insurance have many variables and decisions. 
            How much coverage is enough and what type of policy is best for you and your family are just two of the questions that might arise. 
            After determining your personal product needs, our agency will provide you with the most comprehensive plan with the greatest value for you and your family. 
            We specialize in a wide variety of services and lines of coverage that include, but are not limited to, the following:
          </PersonalTopText>
          <ListRow>
            <div></div>
            <PersonalList dense>
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
        </PersonalTextWrapper>
      </StyledSection>

      <StyledSection>
        <ProfessionalImage
          ref={professionalImageRef}
          src='/images/professional_liability.jpg'
          animate={professionalImageVisible}
        />
        <ProfessionalTextWrapper ref={professionalTextWrapperRef} animate={professionalTextWrapperVisible}>
          <ProfessionalTopText variant='body1' >
          The medical profession is more challenged today by medical malpractice than it has been at any other point in history. You'd like to think it will never happen to you, but unfortunately, it can. MedPLUS offers several liability coverage options that can protect you and your practice from the devastating effects of a lawsuit. Depending on the insurance carrier, professional liability insurance coverage includes the following:
          </ProfessionalTopText>
          <ListRow>
            <ProfessionalList1 dense>
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
          <ProfessionalMiddleText variant='body1'>
          Professional liability solutions are available for physicians, dentists, chiropractors, mid-level providers, and allied staff. In addition, MedPLUS can find the best coverage to protect the following facilities:
          </ProfessionalMiddleText>
          <ListRow>
            <ProfessionalList2 dense>
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
        </ProfessionalTextWrapper>
      </StyledSection>
    </div>
  )
}