import React, { useState } from 'react'
import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import Pets  from '@mui/icons-material/Pets'
import Mail from '@mui/icons-material/Mail'
import Notifications from '@mui/icons-material/Notifications'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent:"space-between",
})

const Search = styled('div')(({ theme }) => ({
  backgroundColor: "white",
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
  
}))

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems:"center",
  gap: "20px",
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  }
}))

export const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap:"10px",
  alignItems: "center",
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  }
}))


function Navbar() {

  const [open, SetOpen] = useState(false)
  
  // const handleMenu = () => {
  //   SetOpen((prevState)=> !prevState)
  // }

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>Social App</Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder='Search...'/></Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
              <Mail/>
          </Badge>
          <Badge badgeContent={2} color='error'>
              <Notifications />
          </Badge>
          <Avatar sx={{width: 30 , height: 30 }} src='https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&w=600' onClick={e=> SetOpen(true)} />
        </Icons>
        <UserBox onClick={e=> SetOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} src='https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&w=600.png'/>
          <Typography variant='span'>John Doe</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        // aria-aria-labelledby='demo-positioned-button'
        open={open}
        onClose={e=> SetOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar