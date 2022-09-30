import { Box, Button, Card, CardActions, CardContent, CardMedia, ImageList, ImageListItem, ImageListItemBar, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { LatestPost } from './LatestPost';
import { RestBlog } from './RestBlog';
export const Blogs = () => {
    const latest2post = itemData.slice(0, 2);
    const restPosts = itemData.slice(2, 5);
    return (
        <Box
            sx={{
                backgroundColor: 'background.default',
                backgroundImage: 'none',
                display: 'flex',
                flexDirection: 'column',
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
                        backgroundColor: 'background.default',
                        backgroundImage: 'none',
                        color: 'text.secondary',
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        letterSpacing: ".12em"
                    }}
                >
                    Blogs
                </Typography>
                <Typography
                    component={'h2'}
                    sx={{
                        backgroundColor: 'background.default',
                        backgroundImage: 'none',
                        marginBottom: "11px",
                        fontSize: "35px",
                        lineHeight: "45px",
                        color: 'text.primary',
                        fontWeight: "700"
                    }}
                >
                    My Latest Articles
                </Typography>
                <Typography
                    component={'div'}
                    sx={{
                        maxWidth: '70%',
                        backgroundColor: 'background.default',
                        backgroundImage: 'none',
                        fontSize: "16px",
                        fontWeight: "normal",
                        lineHeight: "26px",
                        color: "text.primary",
                        textAlign: 'center'
                    }}
                >
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida non proident, sunt in culpa qui officia
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
                        gap={16}
                        sx={{
                            cursor: 'pointer'
                        }}>

                        {/* latest 2 post */}
                        {
                            latest2post.map((item, index) => (
                                <Card
                                    sx={{
                                        bgcolor: 'background.paper',
                                        height: 'auto'
                                    }}
                                    key={index}
                                >
                                    <LatestPost
                                        item={item}
                                    ></LatestPost>
                                </Card>
                            ))
                        }

                        <ImageList
                            cols={1}
                            sx={{
                                bgcolor: 'background.paper'
                            }}
                        >
                            {/* another posts  */}
                            {
                                restPosts.map((item, index) => (
                                    <Card
                                        sx={{
                                            backgroundColor: 'background.default !important',
                                            height: 'auto',
                                            display: "flex",
                                            alignItems: 'center',
                                            backgroundImage: 'none'
                                        }}
                                        key={index}
                                    >
                                        <RestBlog
                                            item={item}
                                        ></RestBlog>
                                    </Card>
                                ))
                            }
                            <Typography
                                sx={{
                                    textTransform: "initial",
                                    color: 'text.secondary',
                                    bgcolor: 'background.default',
                                    position: 'relative',
                                    fontWeight: 'bold',
                                    pt: '1.5rem'
                                }}
                            >
                                All Blogs
                                <NavigateNextIcon sx={{
                                    color: 'text.secondary',
                                    fontSize: '1.3rem',
                                    position: 'absolute',
                                    left: 87,
                                    bottom: 17,
                                    fontWeight: "900",
                                    // ml: 1
                                }} />
                            </Typography>
                        </ImageList>
                    </ImageList>
                </Box>
            </Stack>
        </Box >
    )
}
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        height: '800px'
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        height: '700px'
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
]