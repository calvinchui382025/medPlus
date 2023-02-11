import { ContentContainer } from '../../styled-components'
import { Root } from '../../styled-components';
import Footer from '../../components/Footer';
import { styled, Card, Divider, CardMedia, Typography, Box, IconButton } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import { RowContainer } from '../../styled-components';
import { animateProps, contactFadeIn, contactFadeOut, fadeIn, fadeOut, moveDownAnimation, moveLeftAnimation, moveRightAnimation, niceBoxShadow } from '../../utils/constants'

const AboutRoot = styled(Root)({
  backgroundColor: 'gainsboro',
})

const Teammemberpicturecard = styled(Card)({
  minHeight: 500,
  minWidth: 500,
  maxWidth: 345,
  margin: "0px 15px 10px 15px",
  position: 'relative',
  boxShadow: niceBoxShadow,
})

// const Teammemberarea = styled('div')<animateProps>(({animate}) =>({
//   display: 'flex',
//   flexDirection: 'row',
//   justifyContent: 'center',
//   border: "none",
//   boxShadow: "none",
//   backgroundColor: "transparent",
//   animation: `${moveDownAnimation} 2s`,

//   '@media (max-width: 1600px)': {
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
// })
// )

const TeamTitle = styled('div')({
  marginTop: 10,
  marginBottom: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
})

const TeamMemberAreaCard = styled(Card)<animateProps>(({animate}) =>({
  marginTop: 20,
  paddingTop: 15,
  paddingBottom: 15,
  width: "1250px",
  height: "550px",
  display: 'flex',
  justifyContent: 'center',
  borderRadius: "70px",
  boxShadow: niceBoxShadow,
  backgroundColor: "white",
  animation: `${moveDownAnimation} 2s`,

  '@media (max-width: 1300px)': {
    width: "90%",
    height: "700px",
  },
})
)

const TeamMemberAreaCardTwo = styled(Card)<animateProps>(({animate}) =>({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
  alignItems: 'center',
  width: "1220px",
  borderRadius: "65px",
  border: "none",
  boxShadow: "none",
  backgroundColor: "rgb(227,234,240)",

  '@media (max-width: 1300px)': {
    width: "88%",
    height: "700px",
  },
})
)

const PictureArea = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  marginTop: 10,
  marginBottom: 10,
  '@media (max-width: 1300px)': {
    flexDirection: 'column',
  },
})

const MemberAreaDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const StyledImgElement = styled('img')({
  width: "18em",
  height: "18em",
  borderRadius: "50%",
  boxShadow: niceBoxShadow,
  '@media (max-width: 1300px)': {
    width: "12em",
    height: "12em",
  },
})

const MemberDescriptionArea = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const MemberName = styled(Typography)({
  margin: 8,
  fontWeight: "700",
  fontSize: 20,
})

const MemberEmail = styled(Typography)({
  margin: 8,
  fontWeight: "400",
  fontSize: 16,
})

export const About = () => {
  return (
    <AboutRoot>
      <ContentContainer>
        <TeamMemberAreaCard>
          <TeamMemberAreaCardTwo>
            <TeamTitle>
              <Typography variant="h4" sx={{color: "rgb(35, 116, 176)", marginTop: 2}}>Meet our Team!</Typography>
              {/* <Typography sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} variant="h5" gutterBottom>...</Typography> */}
            </TeamTitle>
            <PictureArea>
              <MemberAreaDiv>
                <StyledImgElement
                src={require("../../images/photo-dennis_borne-lg.jpg")}
                style={{marginRight: "10px"}}
                >  
                </StyledImgElement>
                <MemberDescriptionArea>
                  <MemberName>Dennis Borne</MemberName>
                  <IconButton
                  sx={{color: "rgb(35, 116, 176)"}}
                  aria-label="email"
                  component="label"
                  onClick={() => window.open('mailto:dennis@medplusllc.com')}
                  >
                    <EmailIcon fontSize="small"/>
                  </IconButton>
                  <MemberEmail>dennis@medplusllc.com</MemberEmail>
                </MemberDescriptionArea>
              </MemberAreaDiv>
              <MemberAreaDiv>
                <StyledImgElement
                src={require("../../images/photo-peter_doyle-lg.jpg")}
                >  
                </StyledImgElement>
                <MemberDescriptionArea>
                  <MemberName>Peter Doyle</MemberName>
                  <IconButton
                  sx={{color: "rgb(35, 116, 176)"}}
                  aria-label="email"
                  component="label"
                  onClick={() => window.open('mailto:pete@medplusllc.com')}
                  >
                    <EmailIcon fontSize="small"/>
                  </IconButton>
                  <MemberEmail>pete@medplusllc.com</MemberEmail>
                </MemberDescriptionArea>
              </MemberAreaDiv>
              <MemberAreaDiv>
                <StyledImgElement
                src={require("../../images/photo-karen_jiminez-lg.jpg")}
                style={{marginLeft: "10px"}}
                >  
                </StyledImgElement>
                <MemberDescriptionArea>
                  <MemberName>Karen Jiminez</MemberName>
                  <IconButton
                  sx={{color: "rgb(35, 116, 176)"}}
                  aria-label="email"
                  component="label"
                  onClick={() => window.open('mailto:karenw@medplusllc.com')}
                  >
                    <EmailIcon fontSize="small"/>
                  </IconButton>
                  <MemberEmail>karenw@medplusllc.com</MemberEmail>
                </MemberDescriptionArea>
              </MemberAreaDiv>
            </PictureArea>
          </TeamMemberAreaCardTwo>
        </TeamMemberAreaCard>
        {/* <div>
            <h1>Our past</h1>
            <div>
            While working as a surplus lines broker for U.S. Risk, Dennis Borne saw that medical professionals were underserved in their insurance needs. There was a lack of business ethics throughout the agency industry, and he saw much room for improvement. In 1997, Dennis decided to fill that gap, and he started MedPLUS LLC. He wanted to be the insurance agent that medical professionals could trust to always serve their best interests. MedPLUS has grown each year since then, becoming a larger presence in the medical professional insurance industry. Our agency has many loyal clients who have been with us since the beginning, and we continue to build strong relationships with our customers on a daily basis.
            </div>
            <h1>Our Present</h1>
            <div>
            MedPLUS specializes in providing innovative and comprehensive medical professional liability insurance products through financially secure, A.M. Best Rated insurance carriers. We have more than 100 years of combined experience in the insurance business, so you can be confident when selecting us as your agency. While our core business is in the medical malpractice arena, we are also able to serve your general liability/property, business auto, worker compensation, disability, health, and life insurance needs. Our team of licensed professionals will work with you to determine your coverage needs, address any of your concerns, and advise you on solutions to some of the most complex issues the medical profession faces today.
            </div>
            <h1>Our Future</h1>
            <div>
            Moving into the future, MedPLUS will continue to grow into a solid presence in the medical profession, in Texas and throughout the United States. Our focus, as it always has been, will be on maintaining our ethical responsibility to you, our valued clientele, and your satisfaction will always be our first priority. Ultimately, we aspire to have lasting relationships with our customers that span their medical career and beyond.
            </div>
        </div> */}
      </ContentContainer>
      <Footer />
    </AboutRoot>
  )
}