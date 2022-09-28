import { Button, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import SouthIcon from '@mui/icons-material/South';
import DownloadIcon from '@mui/icons-material/Download';

export default function Introduction() {
    return (
        <Stack direction={'row'} sx={{ backgroundImage: 'none', boxShadow: 'none ', my: 6, p: 4 }}>

            {/* name and social section  */}
            <Stack>
                <Typography variant='h2' sx={{ fontWeight: 'bold' }}>Md Neamul<br />Haque
                    <Typography component={'span'} sx={{
                        flexGrow: 1,
                        bgcolor: 'text.secondary',
                        display: 'inline-block',
                        height: '1rem',
                        width: '1rem',
                        ml: '0.5rem',
                        borderRadius: '10rem'
                    }}></Typography>
                </Typography>
                <Typography sx={{
                    width: '20%',
                    height: 5,
                    my: '1rem',
                    bgcolor: 'text.secondary',
                    borderRadius: '5rem'
                }}></Typography>
                <Stack
                    sx={{
                        mb: '2rem',
                    }}>
                    <Stack direction={'row'} sx={{ my: 1 }}>
                        <Typography sx={{
                            text: 'text.primary',
                            borderRight: 2,
                            px: 1,
                            fontWeight: 'bold',
                            fontSize: '0.9rem'
                        }}>
                            Instagram
                        </Typography>
                        <Typography sx={{
                            text: 'text.primary',
                            px: 1,
                            fontWeight: 'bold',
                            fontSize: '0.9rem'
                        }}>
                            LinkedIn
                        </Typography>
                    </Stack>
                    <Stack direction={'row'}>
                        <Typography sx={{
                            text: 'text.primary',
                            borderRight: 2,
                            px: 1,
                            fontWeight: 'bold',
                            fontSize: '0.9rem'
                        }}>
                            Facebook
                        </Typography>
                        <Typography sx={{
                            text: 'text.primary',
                            px: 1,
                            fontWeight: 'bold',
                            fontSize: '0.9rem'
                        }}>
                            WhatsApp
                        </Typography>
                    </Stack>
                </Stack>
                <Button endIcon={<DownloadIcon />} variant='outlined' size='large'
                    sx={{
                        color: 'text.secondary',
                        borderColor: 'text.secondary',
                        fontWeight: 'bold',
                        width: '60%',
                        ':hover': {
                            bgcolor: 'text.secondary',
                            borderColor: 'text.secondary',
                            color: 'Black'
                        },
                    }}>Resume</Button>
            </Stack>

            {/* picture section  */}
            <Stack sx={{ m: 'auto' }}>
                <h2>Here is the profile pic</h2>
            </Stack>

            {/* Introduction section  */}
            <Stack sx={{ ml: 'auto', maxWidth: '30%', m: '0' }}>
                <Typography
                    sx={{
                        color: 'text.secondary',
                        textTransform: 'uppercase',
                        width: '100%',
                        textAlign: 'left',
                        fontWeight: 'bold'
                    }}>
                    Introduction
                </Typography>
                <Typography component={'p'}
                    sx={{
                        fontSize: '2rem',
                        fontWeight: 'bold'
                    }}>Full-Stack web<br />Developer
                </Typography>
                <Typography component={'p'} sx={{ my: '1rem' }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate illum culpa omnis est libero provident recusandae eos quo doloremque nulla.
                </Typography>
                <Button variant='text'
                    sx={{
                        color: 'text.secondary',
                        textAlign: 'left',
                        width: '45%',
                        fontWeight: 'bold',
                        textTransform: 'inherit',
                        fontSize: '1rem',
                        ':hover': {
                            bgcolor: 'background.default'
                        }
                    }}
                    endIcon={<SouthIcon />}>Learn more</Button>
            </Stack>
        </Stack>
    )
}
