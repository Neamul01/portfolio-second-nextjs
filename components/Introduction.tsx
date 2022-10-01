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
                height: '80vh',
                overflow: 'hidden'
            }}
        >
            <Grid container columns={{ xs: 1, sm: 1, md: 2, lg: 3 }}
                sx={{
                    backgroundImage: 'none',
                    backgroundColor: 'background.default',
                    boxShadow: 'none ',
                    my: 6,
                    p: 4,
                    width: "75%",
                }}>

                {/* name and social section  */}
                <Stack >
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
                        width: '20%',
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
                            <Typography sx={{
                                text: 'text.primary',
                                borderRight: 2,
                                pr: 1,
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
                                pr: 1,
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
                </Stack >

                {/* picture section  */}
                <Stack sx={{ m: 'auto' }}>
                    <Image
                        width={500}
                        height={839}
                        // placeholder='blur'
                        src={MyPhoto}
                        alt={'Md Neamul Haque'}
                    ></Image>
                </Stack >

                {/* Introduction section  */}
                <Stack
                    sx={{
                        ml: 'auto',
                        maxWidth: '30%',
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate illum culpa omnis est libero provident recusandae eos quo doloremque nulla.
                    </Typography>
                    <Button variant='text' className={Styles.menuArea}
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
                </Stack >
            </Grid >
        </Paper>
    )
}
