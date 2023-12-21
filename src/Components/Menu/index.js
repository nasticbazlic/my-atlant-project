import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '../Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Logo1 from '../../Assets/Icons/image 1.svg';
import Logo2 from '../../Assets/Icons/image 2.svg';

import './Menu.css';

const options = [
  'Види будівництва',
  'Ми збудували',
  'Партнерам',
  'Вакансії',
  'Про компанію',
];

const ITEM_HEIGHT = 58;

export default function ButtonAppBar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
                color: '#183181',
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div className="header__logo">
              <img src={Logo1} alt="logo1"></img>
              <img src={Logo2} alt="logo2"></img>
            </div>
          </Typography>
          <Button variant="header__btn">
            Зв'язатися
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}