import { Box, Button, Card, CardActions, CardContent, CardMedia, ImageList, ImageListItem, ImageListItemBar, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { LatestPost } from './LatestPost';
import { RestBlog } from './RestBlog';
import Styles from '../../styles/Home.module.css'

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
                    Here are my blogs. I always try to express my learning throw blogs. If you have any suggestions for me please share them with me, it is very appreciable.
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
                            <Stack
                                sx={{
                                    bgcolor: 'background.default'
                                }}
                            >
                                <Button
                                    href='!#'
                                    className={Styles.menuArea}
                                    endIcon={<NavigateNextIcon sx={{
                                        color: 'text.secondary',
                                        fontSize: '1.3rem',
                                        fontWeight: "900",
                                    }} />}
                                    sx={{
                                        textTransform: "initial",
                                        color: 'text.secondary',
                                        bgcolor: 'background.default',
                                        width: '30%',
                                        fontWeight: 'bold',
                                        px: '0',
                                        pt: '1.5rem',
                                        ':hover': {
                                            bgcolor: 'background.default'
                                        },
                                    }}
                                >
                                    All Blogs
                                </Button>
                            </Stack>
                        </ImageList>
                    </ImageList>
                </Box>
            </Stack>
        </Box >
    )
}
const itemData = [
    {
        img: '/blogs/virtual-dom.png',
        title: 'Something about Virtual Dom',
        height: '800px',
        url: 'https://www.linkedin.com/pulse/react-virtual-dom-md-neamul-haque/?trackingId=VmEXYLvXSgG%2BI7TeHOhn4A%3D%3D',
        description: 'Virtual dom is a carbon copy of Real Dom which is introduced by React.js to optimize the performance of a web Application. With the process of “reconciliation”, React kept a virtual representation of the UI in memory and when something changed in UI React compares the change with the virtual representation and commits only the changes in Real DOM.'
    },
    {
        img: '/blogs/react.png',
        title: 'Something about React',
        height: '700px',
        url: 'https://www.linkedin.com/pulse/something-react-md-neamul-haque/?trackingId=34XSLeamQPy0C3QMOaB8Pg%3D%3D',
        description: 'React.js is a component-based, declarative Javascript library for building interactive UI. React uses Virtual DOM that improves the performance of the app, its component and data pattern helps to maintain a larger app and improve readability. React was developed and maintained by Facebook it is an open-source library, It appeared in 2013 and now it is the most popular library for web development.'
    },
    {
        img: '/blogs/react-redux.png',
        title: 'Something about React-redux',
        url: 'https://www.linkedin.com/posts/neamul62_react-redux-reactabrredux-activity-6963193559877373953-6FA9?utm_source=share&utm_medium=member_desktop',
        description: 'Redux is a pattern and library for managing and updating application state, using events called “actions”. Redux gives us a store outside our dom to serve the data when we need it. React redux is the official React UI bindings layer for Redux. It gives us a redux store to dispatch actions from components.'
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