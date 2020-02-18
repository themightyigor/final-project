import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const Header: React.FC = () => {
  const { Header } = Layout;
  const location = useLocation();

  return (
    <Header>
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={[location.pathname]}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key='/'>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='/caughtPokemons'>
          <Link to='/caughtPokemons'>Caught</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Header;
