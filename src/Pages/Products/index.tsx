import { Card, List, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';
import { Image } from 'mui-image'
import { animateProps, commercialList, moveLeftAnimation, moveRightAnimation, niceBoxShadow, personalList, professionalList1, professionalList2 } from '../../utils/constants';
import Footer from '../../components/Footer';
import { ContentContainer, Root } from '../../styled-components';
//======================================================
const StyledSection = styled('section')({
  // height: 'calc(100vh - 64px)',
  // height: '100%',
})
const ListRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '12px',
  '@media (max-width: 600px)': {
    margin: '6px',
  }
})
//======================================================
const TextWrapper = styled(Card)<animateProps>(() => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
    margin: '12px 24px',
    boxShadow: niceBoxShadow,
    '@media (max-width: 600px)': {
      padding: '12px 24px',
    },
  })
)
const CommercialTextWrapper = styled(TextWrapper)<animateProps>(({animate}) => ({
    animation: animate ? `${moveRightAnimation} 1s` : 'none',
    
  })
)
const PersonalTextWrapper = styled(TextWrapper)<animateProps>(({animate}) => ({
    animation: animate ? `${moveLeftAnimation} 1s` : 'none',
  })
)
const ProfessionalTextWrapper = styled(TextWrapper)<animateProps>(({animate}) => ({
    animation: animate ? `${moveRightAnimation} 1s` : 'none',
  })
)
const OutlinedListItem = styled(ListItem)({
  // thin border
  // border: '1px solid grey',
})
//======================================================
const MediumText = styled(Typography)({
  fontSize: '1rem',
  
  // fontFamily: 'Roboto',
  '@media (max-width: 600px)': {
    fontSize: '0.7rem',
  },
});
const SmallText = styled(Typography)({
  fontSize: '0.8rem',
  fontWeight: 'bold',
  '@media (max-width: 600px)': {
    fontSize: '0.6rem',
  },
});

const CommercialImage = styled('img')<animateProps>(({animate}) => ({
  animation: animate ? `${moveRightAnimation} 1s` : 'none',
  width: '100%',
  boxShadow: niceBoxShadow,
  })
)
const CommercialTopText = styled(MediumText)<animateProps>(({animate}) => ({
    animation: animate ? `${moveRightAnimation} 1s` : 'none',
  })
)
const CommercialList = styled(List)<animateProps>(({animate}) => ({
    animation: animate ? `${moveRightAnimation} 1s` : 'none',
  })
)
const PersonalImage = styled('img')<animateProps>(({animate}) => ({
    animation: animate ? `${moveLeftAnimation} 1s` : 'none',
    width: '100%',
    boxShadow: niceBoxShadow,
  })
)
const PersonalTopText = styled(MediumText)<animateProps>(({animate}) => ({
    animation: animate ? `${moveLeftAnimation} 1s` : 'none',
  })
)
const PersonalList = styled(List)<animateProps>(({animate}) => ({
    animation: animate ? `${moveLeftAnimation} 1s` : 'none',
  })
)
const ProfessionalImage = styled('img')<animateProps>(({animate}) => ({
    animation: animate ? `${moveRightAnimation} 1s` : 'none',
    width: '100%',
    boxShadow: niceBoxShadow,
  })
)
const ProfessionalTopText = styled(MediumText)<animateProps>(({animate}) => ({
    animation: animate ? `${moveRightAnimation} 1s` : 'none',
  })
)
const ProfessionalList1 = styled(List)<animateProps>(({animate}) => ({
    animation: animate ? `${moveRightAnimation} 1s` : 'none',
  })
)
const ProfessionalMiddleText = styled(MediumText)<animateProps>(({animate}) => ({
    animation: animate ? `${moveRightAnimation} 1s` : 'none',
  })
)
const ProfessionalList2 = styled(List)<animateProps>(({animate}) => ({
    animation: animate ? `${moveRightAnimation} 1s` : 'none',
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
    <Root>
      <ContentContainer>
        <StyledSection>
          <CommercialImage
          // @ts-ignore
            ref={commercialImageRef} 
            src={require('../../images/commercial_products.jpg')}
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
                    <OutlinedListItem key={index}>
                      <SmallText variant='body2'>
                        {item}
                      </SmallText>
                    </OutlinedListItem>
                  )
                })}
              </CommercialList>
            </ListRow>
          </CommercialTextWrapper>
        </StyledSection>

        <StyledSection>
          <PersonalImage 
            ref={personalImageRef}
            src={require('../../images/personal_products.jpg' )}
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
                    <OutlinedListItem key={index} style={{display: 'flex', justifyContent: 'flex-end', textAlign: 'right'}} >
                      <SmallText variant='body2'>
                        {item}
                      </SmallText>
                    </OutlinedListItem>
                  )
                })}
              </PersonalList>
            </ListRow>
          </PersonalTextWrapper>
        </StyledSection>

        <StyledSection>
          <ProfessionalImage
            ref={professionalImageRef}
            src={require('../../images/professional_liability.jpg')}
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
                    <OutlinedListItem key={index}>
                      <SmallText variant='body2'>
                        {item}
                      </SmallText>
                    </OutlinedListItem>
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
                    <OutlinedListItem key={index}>
                      <SmallText variant='body2'>
                        {item}
                      </SmallText>
                    </OutlinedListItem>
                  )
                })}
              </ProfessionalList2>
            </ListRow>
          </ProfessionalTextWrapper>
        </StyledSection>

      </ContentContainer>
      <Footer />
    </Root>
  )
}