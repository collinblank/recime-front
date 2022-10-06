import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to={`/recipes/new`}>
      <a href="/">
        <span role="img" aria-label="add recipe"></span>
        Add Recipe
      </a>
      </Link>
      <a href="/">
        <span role="img" aria-label="home"></span>
        Home
        </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;