import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const pages = ['Accounts', 'Reports', 'Forms', 'Role', 'Help Centre'];

function ResponsiveAppBar() {
  const router = useRouter();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start', gap: 2 }}>
            {pages.map((page) => {
              const path = '/' + page.toLowerCase().replace(/ /g, '-');
              const isActive = router.pathname === path;
              return (
                <Link href={path} passHref key={path}>
                  <Button
                    sx={{
                      my: 2,
                      color: isActive ? 'secondary.main' : 'white', // Active color
                      borderBottom: isActive ? '2px solid white' : 'none', // Bottom border if active
                      backgroundColor: isActive ? '#1976d2' : 'transparent',
                      '&:hover': {
                        backgroundColor: isActive ? '#115293' : '',
                        borderBottom: '2px solid white'
                      },
                      display: 'block'
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              );
            })}
          </Box>
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Name" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;