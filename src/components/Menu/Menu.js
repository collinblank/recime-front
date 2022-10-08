import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to={`/recipes/new`}>
        <span role="img" aria-label="add recipe"></span>
        Add Recipe
      </Link>
      <Link to={`/recime-front`}>
        <span role="img" aria-label="home"></span>
        Home
        </Link>
      <Link to={`/sign-up`}>
        <span role="img" aria-label="Sign Up"></span>
        Sign Up
      </Link>
      <Link to={`/login`}>
        <span role="img" aria-label="Login"></span>
        Login
      </Link>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;