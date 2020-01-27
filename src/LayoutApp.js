import {
  ContainerOutlined,
  GroupOutlined,
  LogoutOutlined,
  SecurityScanOutlined,
  TeamOutlined,
  UserOutlined,
  WalletOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Breadcrumb,
  Dropdown,
  Layout,
  Menu,
  PageHeader,
  Tooltip,
} from 'antd';
import React, { useState } from 'react';
import { version } from '../package.json';
import './style.css';

import LogoSymbol from './assets/logo-symbol.png';
import LogoWordMark from './assets/logo-wordmark.png';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const MenuHeader = () => (
  <Menu mode="vertical">
    <Menu.Item>
      <UserOutlined />
      Meu Perfil
    </Menu.Item>
    <Menu.Item>
      <LogoutOutlined />
      Sair
    </Menu.Item>
  </Menu>
);

const LayoutApp = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = value => {
    setCollapsed(value);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <div className="logo">
          <img
            src={collapsed ? LogoSymbol : LogoWordMark}
            height={collapsed ? 32 : 96}
            alt="Simple Agro"
          />
        </div>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="2">
            <TeamOutlined />
            <span>Usuários</span>
          </Menu.Item>
          <Menu.Item key="1">
            <WalletOutlined />
            <span>Clientes</span>
          </Menu.Item>
          <Menu.Item key="ged">
            <Tooltip title="Gerenciamento Eletrônico de Documentos">
              <ContainerOutlined />
              <span>GED</span>
            </Tooltip>
          </Menu.Item>
          <Menu.Item key="3">
            <GroupOutlined />
            <span>Grupo de Produtos</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <SecurityScanOutlined />
                <span>Permissões</span>
              </span>
            }
          >
            <Menu.Item key="4">Grupos</Menu.Item>
            <Menu.Item key="5">Regras</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="ant-simple-global-header">
          <div style={{ float: 'left' }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </div>
          <div style={{ float: 'right' }}>
            <Dropdown overlay={<MenuHeader />} trigger={['click']}>
              <a href>
                <Avatar icon={<UserOutlined />} />
              </a>
            </Dropdown>
          </div>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <PageHeader title="Clientes" />
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Simple Agro © 2020 - {version}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutApp;
