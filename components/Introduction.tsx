import { Button, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import SouthIcon from '@mui/icons-material/South';
import DownloadIcon from '@mui/icons-material/Download';
import Styles from '../styles/Home.module.css'
import Image from 'next/image';
import MyPhoto from 'public/my-pic.png'

export default function Introduction() {
    return (
        <Paper
            sx={{
                backgroundColor: 'background.default',
                backgroundImage: 'none',
                display: 'flex',
                justifyContent: 'center',
                boxShadow: 'none',
                overflow: 'hidden',
                md: {
                    maxHeight: '80vh',
                },
            }}
        >
            <Grid container
                // columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{
                    backgroundImage: 'none',
                    backgroundColor: 'background.default',
                    boxShadow: 'none ',
                    my: 6,
                    p: 4,
                    width: "75%",
                    flexWrap: 'wrap',
                    md: {
                        flexWrap: 'nowrap',
                        height: '80vh',
                    }
                }}>

                {/* name and social section  */}
                <Grid item xs={12} sm={12} md={4}
                    sx={{
                        sm: {
                            // textAlign: 'center'
                        }
                    }}
                >
                    <Typography variant='h2'
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '3rem',
                            mb: '1rem'
                        }}>
                        Md Neamul<br />Haque
                        <Typography component={'span'} sx={{
                            flexGrow: 1,
                            bgcolor: 'text.secondary',
                            display: 'inline-block',
                            height: '0.7rem',
                            width: '0.7rem',
                            ml: '0.5rem',
                            borderRadius: '10rem'
                        }}></Typography>
                    </Typography>
                    <Typography sx={{
                        // width: '20%',
                        height: '0.1rem',
                        my: '1rem',
                        bgcolor: 'text.secondary',
                        borderRadius: '5rem'
                    }}></Typography>
                    <Stack
                        sx={{
                            mb: '2rem',
                        }}>
                        <Stack direction={'row'} sx={{ my: 1 }}>
                            <Typography component={'a'} href='https://github.com/Neamul01' target='_blank'>
                                <Button
                                    href='!#'
                                    size={'small'}
                                    sx={{
                                        color: 'text.primary',
                                        borderRight: 2,
                                        borderRadius: '0',
                                        pr: "1rem",
                                        fontWeight: 'bold',
                                        fontSize: '0.9rem !important',
                                        textTransform: 'inherit',
                                        ':hover': {
                                            bgcolor: 'transparent',
                                            color: 'text.secondary'
                                        },
                                    }}>
                                    GitHub
                                </Button>
                            </Typography>
                            <Typography component='a' href='https://www.linkedin.com/in/neamul62/' target='_blanck'>
                                <Button
                                    href='!#'
                                    size={'small'}
                                    sx={{
                                        color: 'text.primary',
                                        mx: 1,
                                        fontWeight: 'bold',
                                        fontSize: '0.9rem',
                                        textTransform: 'inherit',
                                        ':hover': {
                                            bgcolor: 'transparent',
                                            color: 'text.secondary'
                                        },
                                    }}>
                                    LinkedIn
                                </Button>
                            </Typography>
                        </Stack>
                        <Stack direction={'row'}>
                            <Typography component={'a'} href='https://www.facebook.com/neamul.haque.1614' target={'_blank'}>
                                <Button
                                    href='!#'
                                    size={'small'}
                                    sx={{
                                        color: 'text.primary',
                                        borderRight: 2,
                                        borderRadius: '0',
                                        pr: '1rem',
                                        fontWeight: 'bold',
                                        fontSize: '0.9rem',
                                        textTransform: 'inherit',
                                        ':hover': {
                                            bgcolor: 'transparent',
                                            color: 'text.secondary'
                                        },
                                    }}>
                                    Facebook
                                </Button>
                            </Typography>
                            <Typography component={'a'} href='#!' target='_blank'>
                                <Button
                                    href='!#'
                                    size={'small'}
                                    sx={{
                                        color: 'text.primary',
                                        mx: 1,
                                        fontWeight: 'bold',
                                        fontSize: '0.9rem',
                                        textTransform: 'inherit',
                                        ':hover': {
                                            bgcolor: 'transparent',
                                            color: 'text.secondary'
                                        },
                                    }}>
                                    WhatsApp
                                </Button>
                            </Typography>
                        </Stack>
                    </Stack>
                    <Typography component={'a'} href='https://drive.google.com/uc?export=download&id=1ZAVzdEyZqOrMH31bMF19ClDXuhh9VxIA' target={'_blank'}>
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
                            }}>Resume
                        </Button>
                    </Typography>
                </Grid >

                {/* picture section  */}
                <Grid item xs={12} sm={12} md={4} sx={{ m: 'auto' }}>
                    <Image
                        width={500}
                        height={839}
                        src={MyPhoto}
                        alt={'Md Neamul Haque'}
                    ></Image>
                </Grid >

                {/* Introduction section  */}
                <Grid item xs={12} sm={12} md={4}
                    sx={{
                        ml: 'auto',
                        m: '0',
                        // sm: {
                        //     my: '6rem'
                        // },
                        // md: {
                        //     my: '6rem'
                        // },
                        // lg: {
                        //     my: '6rem'
                        // }
                    }}>
                    <Typography
                        sx={{
                            color: 'text.secondary',
                            textTransform: 'uppercase',
                            width: '100%',
                            textAlign: 'left',
                            fontWeight: 'bold',
                            fontSize: '0.9rem',
                            letterSpacing: '.12em',
                            mb: '0.3rem'
                        }}>
                        Introduction
                    </Typography>
                    <Typography component={'p'}
                        sx={{
                            fontSize: '2.3rem',
                            fontWeight: 'bold',
                            lineHeight: '2.8rem'
                        }}>Full-Stack web<br />Developer
                    </Typography>
                    <Typography component={'p'} sx={{ my: '1rem' }}>
                        I am a dedicated Web Developer, it is my passion and I love to play with web technologies.
                    </Typography>
                    <Button variant='text'
                        href='!#'
                        className={Styles.menuArea}
                        sx={{
                            color: 'text.secondary',
                            width: '39%',
                            fontWeight: 'bold',
                            textTransform: 'inherit',
                            fontSize: '1rem',
                            p: 0,
                            ':hover': {
                                bgcolor: 'background.default'
                            }
                        }}
                        endIcon={<SouthIcon />}>Learn more</Button>
                </Grid   >
            </Grid >
        </Paper>
    )
}
