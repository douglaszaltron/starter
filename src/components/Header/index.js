import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Nav, User } from './styles';

export default function Header() {
  return (
    <Container>
      <Nav>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      </Nav>
      <User>
        <strong>Usuário</strong>
      </User>
    </Container>
  );
}
