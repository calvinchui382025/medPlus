import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { 
  AppBar,
  Box, 
  Button, 
  Divider, 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Toolbar, 
  Typography 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
//====================================================== Persistent variables
const navItems = ['Home', 'About', 'Products', 'Carriers', 'Contact', 'Liability', 'Quote'];
const drawerWidth = 240;
//====================================================== Styled Components
const NavBarWrapper = styled('div')({
  height: '64px',
  
});

const StyledAppBar = styled(AppBar)({
  minHeight: '64px',
});

const StyledToolbar = styled(Toolbar)({
  minHeight: '64px',
  padding: '0px 24px'
})

const MedPlusIconButton = styled(IconButton)({
  color: 'white',
})

const HamburgerIconButton = styled(IconButton)({
  marginRight: '0px !important',
})

const DrawerHeader = styled('div')(({theme}) => {
  return ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '56px',
    backgroundColor: theme?.palette?.primary?.main,
    color: 'white',
    }) 
  });
//======================================================
const NavBar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <DrawerHeader >
        <Typography 
          variant="h6" 
          >
          MedPlus
        </Typography>
      </DrawerHeader>
      <Divider />
      <List>
        {navItems.map((item) => {
          const to = item.toLowerCase();
        return (
          <ListItem key={item} disablePadding>
            <ListItemButton 
              sx={{ textAlign: 'center' }}
              component={Link}
              to={to}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        )
      }
      )}
      </List>
    </Box>
  );

  return (
      <NavBarWrapper>
        <StyledAppBar>
          <StyledToolbar>
            <HamburgerIconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                mr: 2, 
                display: { 
                  md: 'none' 
                } 
              }}
            >
              <MenuIcon />
            </HamburgerIconButton>
            {/* @ts-ignore */}
            <MedPlusIconButton size="large" component={Link} to='/home'>
              <MedicalServicesIcon />
            </MedPlusIconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ 
                flexGrow: 1, 
                display: { 
                  md: 'block' 
                } 
              }}
              >
              MedPlus
            </Typography>
            <Box 
              sx={{ 
                display: { 
                  xs: 'none', 
                  md: 'block',
                } 
              }}
            >
              {navItems.map((item) => {
                const to = item.toLowerCase();
                return (
                <Button 
                  key={item} 
                  component={Link}
                  sx={{ 
                    color: '#fff' 
                  }} 
                  to={to}
                  >
                  <Typography variant='button'>
                    {item}
                  </Typography>
                </Button>
              )}
              )}
            </Box>
          </StyledToolbar>
        </StyledAppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { 
                xs: 'block', 
                md: 'none' 
              },
              '& .MuiDrawer-paper': { 
                boxSizing: 'border-box', 
                width: drawerWidth 
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <StyledToolbar />
        </Box>
      </NavBarWrapper>
  )
}

export default NavBar;