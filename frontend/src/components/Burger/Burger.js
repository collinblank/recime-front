import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';
import Header from '../Header/Header';

const Burger = ({ open, setOpen }) => {
  return (
    <div className="top-bar">
      <Header />
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      
      <div />
      <div />
      <div />

      
    </StyledBurger>
    </div>
    
  )
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;