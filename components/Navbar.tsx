import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Link } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SouthIcon from '@mui/icons-material/South';
import Styles from '../styles/Home.module.css'

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
                        <Button
                            href='!#'
                            className={Styles.menuArea}
                            sx={{
                                fontSize: '1rem',
                                color: 'text.primary',
                                fontWeight: 'bold',
                                textTransform: 'inherit',
                                ':hover': {
                                    bgcolor: 'background.default'
                                },
                            }} >Home</Button>
                        <Button
                            href='!#'
                            className={Styles.menuArea}
                            sx={{
                                fontSize: '1rem',
                                color: 'text.primary',
                                fontWeight: 'bold',
                                textTransform: 'inherit',
                                ':hover': {
                                    bgcolor: 'background.default'
                                }
                            }}  >Portfolio</Button>
                        <Button
                            href='!#'
                            className={Styles.menuArea}
                            sx={{
                                fontSize: '1rem',
                                color: 'text.primary',
                                fontWeight: 'bold',
                                textTransform: 'inherit',
                                ':hover': {
                                    bgcolor: 'background.default'
                                }
                            }} endIcon={<SouthIcon />}  >Blog</Button>
                        <Button
                            href='!#'
                            className={Styles.menuArea}
                            sx={{
                                fontSize: '1rem',
                                color: 'text.primary',
                                fontWeight: 'bold',
                                textTransform: 'inherit',
                                ':hover': {
                                    bgcolor: 'background.default'
                                }
                            }}  >Contact</Button>
                    </Stack>
                    <Stack direction={'row'} spacing='3' sx={{ color: 'text.primary', fontWeight: 'bold', mr: 2, alignItems: 'center', borderLeft: 1, pl: 2 }}>
                        <IconButton
                            // href='!#'    
                            className={Styles.menuArea}
                            component={'p'}
                            sx={{
                                pr: 1,
                                fontSize: '1rem',
                                color: 'text.primary',
                                fontWeight: 'bold',
                                display: 'inline-block',
                                padding: '0'
                            }}><FacebookIcon />
                        </IconButton>
                        <IconButton
                            // href='!#'
                            className={Styles.menuArea}
                            component={'p'}
                            size='small'
                            sx={{
                                mx: '0.6rem !important',
                                fontSize: '1rem',
                                color: 'text.primary',
                                fontWeight: 'bold',
                                display: 'inline-block',
                                padding: '0',
                            }}><LinkedInIcon />
                        </IconButton>
                        <IconButton
                            // href='!#'
                            className={Styles.menuArea}
                            component={'p'}
                            sx={{
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                display: 'inline-block',
                                padding: '0'
                            }}>
                            <Link href='!#' sx={{ color: 'text.primary', }}><WhatsAppIcon /></Link>
                        </IconButton>
                    </Stack>
                </Stack >
            </Toolbar >
        </AppBar >
    )
}
