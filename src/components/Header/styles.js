import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  background: ${props => props.theme.surface};
  border-bottom: 1px solid ${props => props.theme.onSurface};
  padding: 0 16px;
  img {
    margin-right: 16px;
  }
`;

export const Nav = styled.ul`
  flex: 1;
  display: flex;
  border-left: 1px solid ${props => props.theme.onSurface};
  padding: 5px 0 5px 16px;
  a {
    margin-right: 16px;
    font-size: 0.85rem;
    font-weight: bold;
    color: #999;
    text-transform: uppercase;
    transition: color 0.2s;
    &:hover {
      color: #444;
    }
    &.active {
      color: #444;
    }
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  strong {
    font-size: 0.85rem;
  }
  a {
    color: ${props => props.theme.primary};
    font-size: 0.8rem;
    &:active {
      color: #444;
    }
  }
`;
