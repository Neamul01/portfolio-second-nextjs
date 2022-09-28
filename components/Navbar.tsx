import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Navbar() {
    return (
        <AppBar position='static' sx={{ boxShadow: 'none', my: 6 }} style={{ backgroundColor: 'transparent' }} >
            <Toolbar
                sx={{
                    bgcolor: 'background.default',
                }}>
                <Typography variant='h6' component={'div'} sx={{ flexGrow: 1, color: 'text.primary', fontWeight: 'bold', fontSize: '2rem' }}>
                    NH
                    <Typography component={'span'} sx={{
                        flexGrow: 1,
                        bgcolor: 'text.secondary',
                        display: 'inline-block',
                        height: '0.5rem',
                        width: '0.5rem',
                        // ml: '0.5rem',
                        borderRadius: '10rem'
                    }}></Typography>
                </Typography>
                <Stack direction={'row'}  >
                    <Stack direction={'row'} spacing={2} sx={{ pr: 2 }}>
                        <Button sx={{ fontSize: '1rem', color: 'text.primary', fontWeight: 'bold' }} >Home</Button>
                        <Button sx={{ fontSize: '1rem', color: 'text.primary', fontWeight: 'bold' }}  >Portfolio</Button>
                        <Button sx={{ fontSize: '1rem', color: 'text.primary', fontWeight: 'bold' }}  >Blog</Button>
                        <Button sx={{ fontSize: '1rem', color: 'text.primary', fontWeight: 'bold' }}  >Contact</Button>
                    </Stack>
                    <Stack direction={'row'} spacing='3' sx={{ color: 'text.primary', fontWeight: 'bold', mr: 2, alignItems: 'center', borderLeft: 1, pl: 2 }}>
                        <Typography component={'p'} sx={{ pr: 1, fontSize: '1rem', color: 'text.primary', fontWeight: 'bold', display: 'inline-block' }}><FacebookIcon /></Typography>
                        <Typography component={'p'} sx={{ pr: 1, fontSize: '1rem', color: 'text.primary', fontWeight: 'bold', display: 'inline-block' }}><LinkedInIcon /></Typography>
                        <Typography component={'p'} sx={{ fontSize: '1rem', color: 'text.primary', fontWeight: 'bold', display: 'inline-block' }}><WhatsAppIcon /></Typography>
                    </Stack>
                </Stack >
            </Toolbar >
        </AppBar >
    )
}
