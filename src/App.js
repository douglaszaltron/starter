import React from 'react';
import { ConfigProvider as AntdProvider } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate as PersistProvider } from 'redux-persist/integration/react';

import { persistor, store } from './stores';
import GlobalStyle from './styles/global';
import { ThemeProvider } from './theme/ThemeProvider';

import Container from './Container';
import LayoutApp from './LayoutApp';

const App = () => {
  return (
    <ThemeProvider>
      <AntdProvider locale={ptBR}>
        <ReduxProvider store={store}>
          <PersistProvider persistor={persistor}>
            <LayoutApp />
            <GlobalStyle />
          </PersistProvider>
        </ReduxProvider>
      </AntdProvider>
    </ThemeProvider>
  );
};

export default App;
