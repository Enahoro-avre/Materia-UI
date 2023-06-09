import { Fab, Tooltip , Modal , Box, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import { Add as AddIcon, EmojiEmotions, PersonAdd, VideoCameraBack , Image, DateRange}  from '@mui/icons-material'
import React, { useState } from 'react'
import styled from '@emotion/styled'

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent:"center"
    
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: '20px'
    
})

function Add() {
    const [open, SetOpen] = useState(false)
    // const handleOpen = () => {
    //     SetOpen((prevState))
    // }
    return (
        <>
            <Tooltip onClick={e=> SetOpen(true)} title='Delete' sx={{position: 'fixed' , bottom: 20 , left:{ xs: "calc(50% - 25px)", md: 30 } }}>
                <Fab color='primary' aria-label='add'>
                    <AddIcon />
                </Fab>
            </Tooltip>

            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <StyledModal
            open={open}
            onClose={e=> SetOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={280} bgcolor={"background.default"} color={'text.primary'} p={3} borderRadius={5}>
                    <Typography variant='h6' color={'gray'} textAlign={'center'}>Create Post</Typography>
                    <UserBox>
                        <Avatar src='https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&w=600' sx={{ width: 30, height: 30 }} />
                        <Typography fontWeight={500} variant='span'>
                            John wick
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%"}}
                        id='standard-multiline-static'
                        multiline
                        rows={3}
                        placeholder={"What's on your mind ?"}
                        variant='standard'
                    />
                    <Stack direction={'row'} gap={1} mt={2} mb={3}>
                        <EmojiEmotions color='primary' />
                        <Image color='secondary'/>
                        <VideoCameraBack color='success'/>
                        <PersonAdd color='error'/>
                    </Stack>
                    <ButtonGroup variant='contained' aria-label='outlined primary button group' fullWidth>
                        <Button>Post</Button> 
                        <Button sx={{ width: '100px' }}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
            </Box>
            </StyledModal>
        </>
)
}

export default Add