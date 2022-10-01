import { Box, Card, CardContent, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Contact = () => {
    const contacts = [
        {
            email: 'neamulhaque2002@gmail.com',
            icon: 'EmailIcon'
        },
        {
            phone: '+8801865636932'
        },
        {
            skype: 'hello'
        },
        {
            facebook: 'fb'
        },
        {
            linkedIn: 'linkedin'
        },
        {
            whatsapp: 'whatsApp'
        }
    ]

    // const MaterialIcon = ({ icon: string }) => {
    //     switch (icon) {
    //         case 'AccessAlarmIcon': return <EmailIcon />
    //         default: return null
    //     }
    // }
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
                    my: "4rem",
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem'
                }}
            >

                {/* email card  */}
                <Card sx={{ minWidth: 275 }}>
                    <CardContent
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '1.5rem'
                        }}
                    >
                        <IconButton aria-label="email">
                            <EmailIcon />
                        </IconButton>
                        <Typography
                            sx={{
                                fontSize: '1.1rem',
                                color: 'text.secondary',
                                fontWeight: 'bold',
                                ml: '1rem'
                            }}
                        >neamulhaque3298@gmail.com</Typography>
                    </CardContent>
                </Card>

                {/* phone card  */}
                <Card sx={{ minWidth: '22rem', marginTop: '0 !important' }}>
                    <CardContent
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '1.5rem',
                        }}
                    >
                        <IconButton aria-label="email">
                            <PhoneIcon />
                        </IconButton>
                        <Typography
                            sx={{
                                fontSize: '1.1rem',
                                color: 'text.secondary',
                                fontWeight: 'bold',
                                ml: '1rem'
                            }}
                        >+8801865636932</Typography>
                    </CardContent>
                </Card>

                {/* skype card  */}
                <Card sx={{ minWidth: 275, marginTop: '0 !important' }}>
                    <CardContent
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '1.5rem'
                        }}
                    >
                        <IconButton aria-label="email">
                            <EmailIcon />
                        </IconButton>
                        <Typography
                            sx={{
                                fontSize: '1.1rem',
                                color: 'text.secondary',
                                fontWeight: 'bold',
                                ml: '1rem'
                            }}
                        >neamulhaque3298@gmail.com</Typography>
                    </CardContent>
                </Card>

                {/* facebook card  */}
                <Card sx={{ minWidth: 275 }}>
                    <CardContent
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '1.5rem'
                        }}
                    >
                        <IconButton aria-label="email">
                            <FacebookIcon />
                        </IconButton>
                        <Typography
                            sx={{
                                fontSize: '1.1rem',
                                color: 'text.secondary',
                                fontWeight: 'bold',
                                ml: '1rem'
                            }}
                        >neamulhaque3298@gmail.com</Typography>
                    </CardContent>
                </Card>

                {/* linkedin card  */}
                <Card sx={{ minWidth: 275 }}>
                    <CardContent
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '1.5rem'
                        }}
                    >
                        <IconButton aria-label="email">
                            <LinkedInIcon />
                        </IconButton>
                        <Typography
                            sx={{
                                fontSize: '1.1rem',
                                color: 'text.secondary',
                                fontWeight: 'bold',
                                ml: '1rem'
                            }}
                        >neamulhaque3298@gmail.com</Typography>
                    </CardContent>
                </Card>

                {/* whatsApp card  */}
                <Card sx={{ minWidth: 275 }}>
                    <CardContent
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '1.5rem'
                        }}
                    >
                        <IconButton aria-label="email">
                            <WhatsAppIcon />
                        </IconButton>
                        <Typography
                            sx={{
                                fontSize: '1.1rem',
                                color: 'text.secondary',
                                fontWeight: 'bold',
                                ml: '1rem'
                            }}
                        >neamulhaque3298@gmail.com</Typography>
                    </CardContent>
                </Card>
            </Stack>
        </Box >
    )
}
