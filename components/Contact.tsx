import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export const Contact = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'background.paper',
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
                        backgroundColor: 'background.paper',
                        backgroundImage: 'none',
                        color: 'text.secondary',
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        letterSpacing: ".12em"
                    }}
                >
                    Contact Me
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
                        fontWeight: "700"
                    }}
                >
                    Ways To Contact Me
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
                    {/* <ImageList
                        cols={3}
                        gap={16}
                        sx={{
                            cursor: 'pointer'
                        }}>

                        {/* latest 2 post */}
                    {/* {
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
                        } */}

                    {/* <ImageList
                            cols={1}
                            sx={{
                                bgcolor: 'background.paper'
                            }}
                        >
                            {/* another posts  */}
                    {/* {
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
                    } */}
                    {/* <Typography
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
                    </Typography> */}
                    {/* </ImageList> */}
                    {/* </ImageList> */}
                </Box>
            </Stack>
        </Box >
    )
}
