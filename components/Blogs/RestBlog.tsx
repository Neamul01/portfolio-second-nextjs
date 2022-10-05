import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Stack } from '@mui/system';

type itemType = {
    item: {
        img: string
        title: string
        height?: string | undefined
        description?: string
    }
}

export const RestBlog = (props: itemType) => {
    const { item } = props;
    return (
        <>
            <Stack
                sx={{
                    bgcolor: 'background.paper !important',
                    height: 'auto',
                    display: "flex",
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundImage: 'none',
                }}
            >
                <CardMedia
                    component={"img"}
                    image={item.img}
                    alt="green iguana"
                    sx={{
                        height: "9.6rem",
                        width: '8.5rem'
                    }}
                />
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Typography gutterBottom variant="h5" component="div" color='text.primary'
                        sx={{
                            fontSize: "1.1rem",
                            lineHeight: "1.5rem",
                            transition: ".3s ease",
                            ':hover': {
                                color: 'text.secondary'
                            },
                        }}
                    >
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.primary"
                        sx={{
                            fontSize: '1rem',
                            lineHeight: "1.3rem",
                            whiteSpace: "break-spaces",
                            fontFamily: "'Nunito', sans-serif"
                        }}
                    >
                        {
                            item.description ? item?.description?.slice(0, 40) : 'This Blog is coming soon'
                        }....
                    </Typography>
                </CardContent>
            </Stack>
        </>
    )
}
