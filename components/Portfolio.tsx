import { IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import React, { useState } from 'react'
import { Grid, Paper, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { bgcolor, Box } from '@mui/system'
// import breezeTime from 


export const Portfolio = () => {
    const [open, setOpen] = useState(false)
    return (
        <Stack
            id='portfolio'
            direction='column'
            sx={{
                backgroundColor: 'background.paper',
                backgroundImage: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'none',
                width: '100%',
                padding: '7.5rem'
            }}
        >
            <Stack component={'div'} direction='column'
                sx={{
                    maxWidth: '50%',
                    alignItems: 'center'
                }}
            >
                <Typography
                    component={'p'}
                    sx={{
                        backgroundColor: 'background.paper',
                        backgroundImage: 'none',
                        color: 'text.secondary',
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        letterSpacing: ".12em"
                    }}
                >
                    Portfolio
                </Typography>
                <Typography
                    component={'h2'}
                    sx={{
                        backgroundColor: 'background.paper',
                        backgroundImage: 'none',
                        marginBottom: "11px",
                        fontSize: "35px",
                        lineHeight: "45px",
                        color: 'text.primary',
                        fontWeight: "700",
                        textAlign: 'center'
                    }}
                >
                    My Masterpiece Collection
                </Typography>
                <Typography
                    component={'div'}
                    sx={{
                        maxWidth: '70%',
                        backgroundColor: 'background.paper',
                        backgroundImage: 'none',
                        fontSize: "16px",
                        fontWeight: "normal",
                        lineHeight: "26px",
                        color: "text.primary",
                        textAlign: 'center'
                    }}
                >
                    Here are my best projects. All are not done yet something is under construction, and I am working with them. If you have any suggestions please share them with me.
                </Typography>
            </Stack>
            <Stack spacing={4}
                sx={{
                    alignItems: 'center',
                    my: "4rem"
                }}
            >
                <Box sx={{
                    // height: 500,
                    width: "80%",
                    // overflowY: 'scroll'
                }}>
                    <ImageList
                        cols={3}
                        variant='masonry'
                        gap={12}
                        sx={{
                            cursor: 'pointer'
                        }}>
                        {
                            itemData.map((item, index) => (
                                <ImageListItem key={index} cols={1} rows={1}>
                                    <Typography component='a' href={item.url} target='_blanck'>
                                        <Image
                                            width={400}
                                            height={500}
                                            src={item.img}
                                            alt={item.title}
                                        />
                                        <ImageListItemBar title={item.title}></ImageListItemBar>
                                    </Typography>
                                </ImageListItem>
                            ))
                        }
                    </ImageList>
                </Box>
            </Stack>
        </Stack >
    )
}
const itemData = [
    {
        img: '/projects/breezeTime.png',
        title: 'BreezeTime',
        url: 'https://breeze-time.netlify.app/'
    },
    {
        img: '/projects/gadgetHub.png',
        title: 'GadgetHub',
        url: 'https://gadget-hub-2022.web.app/'
    },
    {
        img: '/projects/n@n-Industries.png',
        title: 'N@N Industries',
        url: 'https://nn-industries.web.app/'
    }
]