import { Typography, List, ListItemText, ListItem, ListItemButton } from '@mui/material';
import { styled } from '@mui/system';
import { mainColor } from '../../App';
import { ContentContainer } from '../../styled-components';
//==============================================================================
export const CarrierContentContainer = styled(ContentContainer)(({theme}) => ({
}));
export const CarrierTextContainer = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  padding: '24px',
}));
export const CarrierPageText = styled(Typography)(({theme}) => ({
}))
export const InfoContainer = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
export const RatingInfoContainer = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '33%',
  minWidth: '350px',
}));
export const RatingList = styled(List)(({theme}) => ({
  width: '100%',
}));
export const leftTextProps = {
  fontSize: '0.8rem',
  fontWeight: 'bold'
}
export const rightTextProps = {
  // textAlign: 'right',
  fontSize: '0.8rem',
}
export const RatingListItemTextLeft = styled(ListItemText)(({theme}) => ({
  display: 'flex',
  justifyContent: 'flex-start',
}));

export const RatingListItemTextRight = styled(ListItemText)(({theme}) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  textAlign: 'right',
}));

export const StyledListContainer = styled('div')(({theme}) => (
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '33%',
    minWidth: '350px',
  })
)
export const CarrierList = styled(List)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
}))
export const CarrierListItem = styled(ListItem)(({theme}) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  margin: 0,
}))
export const CarrierListButton = styled(ListItemButton)(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between',
}))

export const CarrierName = styled(Typography)(({theme}) => ({
    color: mainColor,
    fontWeight: 'bold',
    fontSize: '1rem',
  })
)
export const CarrierDetailsWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  padding: '12px 32px',

})
export const CarrierDescription = styled(Typography)(({theme}) => ({
    
  })
)
export const CarrierRating = styled(Typography)(({theme}) => ({
    fontWeight: 'bold',
  })
)