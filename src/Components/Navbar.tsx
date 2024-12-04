import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../Css/navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const pages = ['Home', 'Astronomy', 'Planets', 'Contact'];
    const drawerWidth = 240;
    const navigate = useNavigate()

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const navigateNavbar = (page: string) => {
        if (page === "Home") {
            navigate("/");
        } else {
            navigate(`/${page.toLowerCase()}`);
        }
    }

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
            </Typography>
            <Divider />
            <List>
                {pages.map((item) => (
                    <ListItem key={item} disablePadding onClick={() => navigateNavbar(item)}>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container: HTMLElement | undefined = typeof window !== 'undefined' ? document.body : undefined;

    return (
        <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            ml: 5,
                            mt: 1,
                            display: { xs: 'flex', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 500,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        AstroVerse
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{ my: 2, color: 'white', display: 'block', mr: 5, mt: 3 }}

                                onClick={() => navigateNavbar(page)}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { xs: 'flex', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                <nav>
                    <Drawer
                        anchor='right'
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        PaperProps={{
                            sx: {
                                width: drawerWidth,
                                background: 'linear-gradient(to bottom, #0d0d2b, #1a1a4d)',
                                color: 'white',
                                backgroundImage: 'url(/path/to/stars.png)',
                                backgroundSize: 'cover',
                                textAlign: 'center',
                                marginTop: '25px',
                                right: "-65px",
                                fontSize: "10px"
                            },
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'block', md: 'none' },
                        }}

                    >
                        {drawer}
                    </Drawer>

                </nav>
            </Container>
        </AppBar>
    );
}

export default Navbar;
