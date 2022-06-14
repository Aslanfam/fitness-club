import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '70px', height: '70px', margin: '0px 20px', objectFit: 'contain' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="20px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#0A192F', borderBottom: '3px solid #F76E11' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#0A192F' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
