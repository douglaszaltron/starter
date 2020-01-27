import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route as RouteWrapper } from 'react-router-dom';
import { store } from '../stores';

const Route = ({ component: Component, isPrivate, ...rest }) => {
  const { isSigned } = store.getState().auth;

  if (!isSigned && isPrivate) {
    return <Redirect to="/signin" />;
  }

  if (isSigned && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <RouteWrapper {...rest} component={Component} />;
};

Route.defaultProps = { isPrivate: false };

Route.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.func.isRequired,
};

export default Route;
