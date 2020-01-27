import React, { useEffect } from 'react';
import { Button } from 'antd';

import { useSelector, useDispatch } from 'react-redux';

import { index } from './stores/reducers/clients/actions';

const Container = () => {
  const { signed } = useSelector(value => value.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(index());
  }, [dispatch]);

  useEffect(() => {
    const bootstrapAsync = async () => {
      await signed;
    };
    bootstrapAsync();
  });

  return (
    <div>
      <Button type="primary">Button</Button>
    </div>
  );
};

export default Container;
