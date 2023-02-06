import { ContentContainer } from '../../styled-components'
import { styled, Card, CardMedia, Typography, Box, IconButton } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import { RowContainer } from '../../styled-components';

// const Meetteamarea = styled('div')({
//   display: 'flex',
//   flexDirection: 'row',
//   justifyContent: 'center',

// })

const Teammemberpicturecard = styled(Card)({
  minHeight: 500,
  minWidth: 500,
  margin: "0px 15px 0px 15px",

})

const Teammemberarea = styled(Card)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  border: "none",
  boxShadow: "none",
  backgroundColor: "transparent",
})


export const About = () => {
  return (
    <ContentContainer>
      {/* <h1>Our past</h1>
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
      </div> */}
      <Typography
      variant="h2"
      gutterBottom
      >
      Meet our Team
      </Typography>
      <Teammemberarea>
          <Teammemberpicturecard sx={{ maxWidth: 345 }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="500"
                  image="/images/photo-peter_doyle-lg.jpg"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.54)',
                    color: 'white',
                    padding: '10px',
                  }}
                >
                  <Typography variant="h3">Peter Doyle</Typography>
                  <Typography variant="h5">Agent</Typography>
                  <RowContainer>
                    <IconButton sx={{color: "white"}} aria-label="email" component="label">
                      <Typography variant="body2">Email: pete@medplusllc.com</Typography>
                      <EmailIcon fontSize="small" sx={{paddingLeft: 0}}/>
                    </IconButton>
                  </RowContainer>
                </Box>
              </Box>
            </Teammemberpicturecard>
            <Teammemberpicturecard sx={{ maxWidth: 345 }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="500"
                  image="/images/photo-dennis_borne-lg.jpg"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.54)',
                    color: 'white',
                    padding: '10px',
                  }}
                >
                  <Typography variant="h3">Dennis Borne</Typography>
                  <Typography variant="h5">President</Typography>
                  <RowContainer>
                    <IconButton sx={{color: "white"}} aria-label="email" component="label">
                      <Typography variant="body2">Email: dennis@medplusllc.com</Typography>
                      <EmailIcon fontSize="small"/>
                    </IconButton>
                  </RowContainer>
                </Box>
              </Box>
            </Teammemberpicturecard>
            <Teammemberpicturecard sx={{ maxWidth: 345 }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="500"
                  image="/images/photo-karen_jiminez-lg.jpg"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.54)',
                    color: 'white',
                    padding: '10px',
                  }}
                >
                  <Typography variant="h3">Karen Jimenez</Typography>
                  <Typography variant="h5">ISR</Typography>
                  <RowContainer>
                    <IconButton sx={{color: "white"}} aria-label="email" component="label">
                      <Typography variant="body2">Email: karenw@medplusllc.com</Typography>
                      <EmailIcon fontSize="small"/>
                    </IconButton>
                  </RowContainer>
                </Box>
              </Box>
            </Teammemberpicturecard>
      </Teammemberarea>
    </ContentContainer>
  )
}