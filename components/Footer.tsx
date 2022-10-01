import { Box, Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
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
                padding: '1.3rem',
                borderTop: '1px solid',
                borderColor: 'text.secondary'
            }}
        >
            <Typography
                sx={{
                    fontFamily: "'Nunito', sans-serif"
                }}
            >
                <Typography component={'span'} color={'text.primary'}
                    sx={{
                        paddingRight: '0.4rem',
                        borderRight: '0.127rem solid',
                        borderColor: 'text.primary',
                    }}
                >
                    &copy; Copyright - Neamul
                </Typography>
                <Typography component={'span'} color={'text.primary'}> All Right Reserved</Typography>
            </Typography>
        </Box>
    )
}
