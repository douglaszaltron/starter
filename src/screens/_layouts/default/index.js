import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import { Wrapper, WrapperContent } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <WrapperContent>{children}</WrapperContent>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
