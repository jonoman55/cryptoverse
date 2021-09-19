import React from 'react';
import { Button, Menu, Typography, Avatar, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import { useWindowSize } from '../hooks/useWindowSize';
import icon from '../images/cryptocurrency.png';

const { Item } = Menu;
const { Title } = Typography;

const MainMenu = () => (
    <Menu theme="dark">
        <Item key={0} icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
        </Item>
        <Item key={1} icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Item>
        <Item key={2} icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
        </Item>
        <Item key={3} icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
        </Item>
    </Menu>
);

const DropDownMenu = () => (
    <Dropdown overlay={MainMenu}>
        <Button className="menu-control-container">
            <MenuOutlined style={{ display: 'flex', justifyContent: 'center' }} />
        </Button>
    </Dropdown>
);

const Navbar = () => {
    const { width } = useWindowSize();
    const screenWidth = width <= 800;
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Title level={2} className="logo">
                    <Link to="/">Cryptoverse</Link>
                </Title>
            </div>
            {!screenWidth ? <MainMenu /> : <DropDownMenu />}
        </div>
    );
};

export default Navbar;