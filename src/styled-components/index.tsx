import { styled } from '@mui/system';

export const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  padding: '0px',
  // backgroundColor: 'green',
})

export const ContentContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // height: '100%',
  width: '100%',
  maxWidth: '120em',
  padding: '0px',
  // border: '1px solid grey',
});

export const RowContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
})