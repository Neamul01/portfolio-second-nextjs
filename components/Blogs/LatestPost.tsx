import { Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Styles from '../../styles/Home.module.css'

type itemType = {
    item: {
        img: string
        title: string
        height?: string | undefined
    }
}

export const LatestPost = (props: itemType) => {
    const { item } = props
    return (
        <>
            <CardMedia
                component={"img"}
                image={item.img}
                alt="green iguana"
                sx={{
                    height: "21rem"
                }}
            />
            <CardContent
                sx={{
                    px: '2rem',
                    py: '0',
                    mt: '2.2rem',
                    mb: '0.5rem'
                }}
            >
                <Typography gutterBottom variant="h5" component="div" color='text.secondary'
                    sx={{
                        fontSize: "1.4rem",
                        lineHeight: "2rem",
                        transition: ".3s ease"
                    }}
                >
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.primary"
                    sx={{
                        fontSize: '1rem',
                        lineHeight: "26px",
                        fontFamily: "'Nunito', sans-serif"
                    }}
                >
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    px: '2rem',
                    py: '0',
                    mb: '2.5rem'
                }}
            >
                <Button
                    href='!#'
                    className={Styles.menuArea}
                    endIcon={
                        <NavigateNextIcon sx={{
                            color: 'text.secondary',
                            fontWeight: "900",
                        }} />
                    }
                    sx={{
                        textTransform: "initial",
                        color: 'text.secondary',
                        fontWeight: 'bold',
                        ':hover': {
                            bgcolor: 'transparent'
                        },
                    }}
                >
                    Read more &nbsp;
                </Button>
            </CardActions>
        </>
    )
}
