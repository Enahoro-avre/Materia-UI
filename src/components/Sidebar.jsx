import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import Home from '@mui/icons-material/Home'
import Setings from '@mui/icons-material/Settings'
import Group from '@mui/icons-material/Group'
import AccountBox from '@mui/icons-material/AccountBox'
import Pages from '@mui/icons-material/Pages'
import Shop from '@mui/icons-material/Shop'
import Person from '@mui/icons-material/Person'
import ModeNight from '@mui/icons-material/ModeNight'
import StorefrontIcon from '@mui/icons-material/Storefront';
import ArticleIcon from '@mui/icons-material/Article';


import React from 'react'

function Sidebar({mode , SetMode}) {
  return (
    <Box  
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={'fixed'}>

      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href="#home">
            <ListItemIcon>
              {/* <Inbox />/ */}
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href="#home">
            <ListItemIcon>
              {/* <Inbox />/ */}
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Pages"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href="#home">
            <ListItemIcon>
              {/* <Inbox />/ */}
              <Group />
            </ListItemIcon>
            <ListItemText primary="Groups"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href="#home">
            <ListItemIcon>
              {/* <Inbox />/ */}
            <StorefrontIcon />
            </ListItemIcon>
            <ListItemText primary="Marketplace"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href="#home">
            <ListItemIcon>
              {/* <Inbox />/ */}
              <Person />
            </ListItemIcon>
            <ListItemText primary="friends"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href="#home">
            <ListItemIcon>
              {/* <Inbox />/ */}
              <Setings />
            </ListItemIcon>
            <ListItemText primary="Settings"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href="#home">
            <ListItemIcon>
              {/* <Inbox />/ */}
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href="#home">
            <ListItemIcon>
            <ModeNight />
            </ListItemIcon>
            <Switch onChange={e=> SetMode(mode ==="light" ? "dark" : "light")} />
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  )
}

export default Sidebar