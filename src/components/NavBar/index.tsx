import React, { FC, useState } from 'react';
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
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
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
    height: '64px',
    backgroundColor: theme?.palette?.primary?.main,
    color: 'white',
    boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
    }) 
  });
//======================================================
export interface NavBarTypes {
  theme: any,
  handleToggleTheme: any,
}
//======================================================
const NavBar: FC<NavBarTypes> = ({ theme, handleToggleTheme }) => {

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
            <MedPlusIconButton size="large" component={Link} to='/'>
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
            <IconButton style={{ color: 'white'}} onClick={handleToggleTheme}>
              {
                theme?.palette?.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />
              }
            </IconButton>
            <Box 
              sx={{ 
                display: { 
                  xs: 'none', 
                  md: 'block',
                } 
              }}
            >
              {
                navItems.map((item) => {
                  let to = item.toLowerCase();
                  if (item === 'Home') to = '/'
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
                )
              }
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